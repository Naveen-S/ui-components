"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { weeklyMilestones } from "@/app/DSA/data";
import { courseModules } from "@/app/DSA/courseContent";

const STORAGE_KEY = "namaste-dsa-progress-v1";
const MASTERED_REVISION_TARGET = 2;
const STARRED_MASTERED_REVISION_TARGET = 4;

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const pct = (completed, total) => {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
};

const getRevisionTarget = (progress) =>
  progress?.isStarred ? STARRED_MASTERED_REVISION_TARGET : MASTERED_REVISION_TARGET;

export default function WeeklyMilestoneBoard() {
  const [progressMap, setProgressMap] = useState({});
  const [celebratingKeys, setCelebratingKeys] = useState({});
  const previousCompletionRef = useRef({});
  const todayKey = getTodayKey();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const isNewShape =
          parsed &&
          typeof parsed === "object" &&
          !Array.isArray(parsed) &&
          ("progressMap" in parsed || "activityLog" in parsed);

        if (isNewShape) {
          setProgressMap(parsed.progressMap || {});
        } else {
          setProgressMap(parsed || {});
        }
      }
    } catch {
      setProgressMap({});
    }
  }, []);

  useEffect(() => {
    const handleProgressUpdated = (event) => {
      if (event.detail?.progressMap) {
        setProgressMap(event.detail.progressMap);
      }
    };

    window.addEventListener("namaste-dsa-progress-updated", handleProgressUpdated);
    return () => {
      window.removeEventListener("namaste-dsa-progress-updated", handleProgressUpdated);
    };
  }, []);

  const currentWeekId = useMemo(() => {
    const currentWeek = weeklyMilestones.find(
      (week) => todayKey >= week.startDate && todayKey <= week.endDate,
    );
    return currentWeek?.id || weeklyMilestones[0]?.id;
  }, [todayKey]);

  const moduleLessonIds = useMemo(() => {
    return courseModules.reduce((acc, module) => {
      acc[module.id] = module.items.map((item) => item.id);
      return acc;
    }, {});
  }, []);

  const completedIds = useMemo(() => {
    return Object.entries(progressMap)
      .filter(([, meta]) => meta?.done)
      .map(([id]) => Number(id));
  }, [progressMap]);

  const masteredIds = useMemo(() => {
    return Object.entries(progressMap)
      .filter(([, meta]) => (meta?.masteredRevisionCount || 0) >= getRevisionTarget(meta))
      .map(([id]) => Number(id));
  }, [progressMap]);

  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);
  const masteredSet = useMemo(() => new Set(masteredIds), [masteredIds]);

  const getCompletedByDate = (lessonIds, limitDate) => {
    return lessonIds.filter((id) => {
      const meta = progressMap[id];
      return meta?.done && meta?.completedOn && meta.completedOn <= limitDate;
    }).length;
  };

  const getMasteredByDate = (lessonIds, limitDate) => {
    return lessonIds.filter((id) => {
      const meta = progressMap[id];
      return (
        meta?.masteryUpdatedOn &&
        meta.masteryUpdatedOn <= limitDate &&
        (meta?.masteredRevisionCount || 0) >= getRevisionTarget(meta)
      );
    }).length;
  };

  const evaluateRule = (rule, milestoneStartDate) => {
    if (!rule) return { completed: false, progress: 0, target: 0 };

    if (rule.type === "completeLessonsInModules") {
      const lessonIds = rule.moduleIds.flatMap((moduleId) => moduleLessonIds[moduleId] || []);
      const progress = lessonIds.filter((id) => completedSet.has(id)).length;
      const banked = getCompletedByDate(lessonIds, milestoneStartDate) >= rule.target;
      return { completed: progress >= rule.target, progress, target: rule.target, banked };
    }

    if (rule.type === "masterLessonsInModules") {
      const lessonIds = rule.moduleIds.flatMap((moduleId) => moduleLessonIds[moduleId] || []);
      const progress = lessonIds.filter((id) => masteredSet.has(id)).length;
      const banked = getMasteredByDate(lessonIds, milestoneStartDate) >= rule.target;
      return { completed: progress >= rule.target, progress, target: rule.target, banked };
    }

    if (rule.type === "completeSpecificLessons") {
      const progress = rule.lessonIds.filter((id) => completedSet.has(id)).length;
      const banked = getCompletedByDate(rule.lessonIds, milestoneStartDate) >= rule.target;
      return { completed: progress >= rule.target, progress, target: rule.target, banked };
    }

    if (rule.type === "masterSpecificLessons") {
      const progress = rule.lessonIds.filter((id) => masteredSet.has(id)).length;
      const banked = getMasteredByDate(rule.lessonIds, milestoneStartDate) >= rule.target;
      return { completed: progress >= rule.target, progress, target: rule.target, banked };
    }

    if (rule.type === "overallCompletionPercent") {
      const uniqueIds = new Set(courseModules.flatMap((module) => module.items.map((item) => item.id)));
      const progress = pct(completedIds.length, uniqueIds.size);
      const bankedProgress = pct(
        Object.values(progressMap).filter((meta) => meta?.done && meta?.completedOn && meta.completedOn <= milestoneStartDate).length,
        uniqueIds.size,
      );
      return {
        completed: progress >= rule.target,
        progress,
        target: rule.target,
        suffix: "%",
        banked: bankedProgress >= rule.target,
      };
    }

    if (rule.type === "overallMasteryPercent") {
      const uniqueIds = new Set(courseModules.flatMap((module) => module.items.map((item) => item.id)));
      const progress = pct(masteredIds.length, uniqueIds.size);
      const bankedProgress = pct(
        Object.entries(progressMap).filter(
          ([, meta]) =>
            meta?.masteryUpdatedOn &&
            meta.masteryUpdatedOn <= milestoneStartDate &&
            (meta?.masteredRevisionCount || 0) >= getRevisionTarget(meta),
        ).length,
        uniqueIds.size,
      );
      return {
        completed: progress >= rule.target,
        progress,
        target: rule.target,
        suffix: "%",
        banked: bankedProgress >= rule.target,
      };
    }

    if (rule.type === "allStarredMastered") {
      const starredIds = Object.entries(progressMap)
        .filter(([, meta]) => meta?.isStarred)
        .map(([id]) => Number(id));
      const masteredStarred = starredIds.filter((id) => masteredSet.has(id)).length;
      const target = starredIds.length;
      const bankedTarget = Object.entries(progressMap)
        .filter(([, meta]) => meta?.isStarred)
        .map(([id]) => Number(id));
      const bankedMastered = bankedTarget.filter((id) => {
        const meta = progressMap[id];
        return (
          meta?.masteryUpdatedOn &&
          meta.masteryUpdatedOn <= milestoneStartDate &&
          (meta?.masteredRevisionCount || 0) >= getRevisionTarget(meta)
        );
      }).length;
      return {
        completed: target > 0 && masteredStarred >= target,
        progress: masteredStarred,
        target,
        banked: target > 0 && bankedMastered >= target,
      };
    }

    return { completed: false, progress: 0, target: 0 };
  };

  const overallMissionProgress = useMemo(() => {
    const totalTasks = weeklyMilestones.reduce((sum, week) => sum + week.tasks.length, 0);
    const completedTasks = weeklyMilestones.reduce((sum, week) => {
      return (
        sum +
        week.tasks.filter((task) => {
          return evaluateRule(task.rule, week.startDate).completed;
        }).length
      );
    }, 0);

    return {
      totalTasks,
      completedTasks,
      percent: pct(completedTasks, totalTasks),
    };
  }, [completedIds.length, masteredIds.length, progressMap, moduleLessonIds]);

  const taskStatusMap = useMemo(() => {
    const map = {};
    weeklyMilestones.forEach((milestone) => {
      milestone.tasks.forEach((task) => {
        const taskKey = `${milestone.id}:${task.label}`;
        map[taskKey] = evaluateRule(task.rule, milestone.startDate).completed;
      });
    });
    return map;
  }, [progressMap, moduleLessonIds, completedIds.length, masteredIds.length]);

  useEffect(() => {
    const previous = previousCompletionRef.current;
    const nextCelebrations = {};

    Object.entries(taskStatusMap).forEach(([taskKey, isCompleted]) => {
      if (isCompleted && !previous[taskKey]) {
        nextCelebrations[taskKey] = true;
      }
    });

    if (Object.keys(nextCelebrations).length > 0) {
      setCelebratingKeys((prev) => ({ ...prev, ...nextCelebrations }));
      const timeout = setTimeout(() => {
        setCelebratingKeys((prev) => {
          const updated = { ...prev };
          Object.keys(nextCelebrations).forEach((taskKey) => {
            delete updated[taskKey];
          });
          return updated;
        });
      }, 1800);

      previousCompletionRef.current = taskStatusMap;
      return () => clearTimeout(timeout);
    }

    previousCompletionRef.current = taskStatusMap;
  }, [taskStatusMap]);

  const renderMilestoneIcon = (isCompleted, isBanked, isCelebrating) => {
    if (isCompleted && isBanked) {
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm">
          <span aria-hidden="true">🧺</span>
        </div>
      );
    }

    if (isCompleted) {
      return (
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm ${
            isCelebrating ? "animate-bounce ring-4 ring-emerald-200" : ""
          }`}
        >
          <span aria-hidden="true">{isCelebrating ? "✨" : "🏆"}</span>
        </div>
      );
    }

    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm">
        <span aria-hidden="true">🎯</span>
      </div>
    );
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
            13-Week Campaign
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Weekly milestones from April 27 to July 26, 2026
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            This is your interactive mission board. Show up, clear the week, and
            keep turning the whole journey into a series of satisfying checkmarks.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Campaign progress:</span>{" "}
            {overallMissionProgress.percent}% complete
          </p>
          <p>
            <span className="font-semibold text-slate-900">Tasks cleared:</span>{" "}
            {overallMissionProgress.completedTasks} / {overallMissionProgress.totalTasks}
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 transition-all duration-500"
          style={{ width: `${overallMissionProgress.percent}%` }}
        />
      </div>

      <div className="mt-6 space-y-4">
        {weeklyMilestones.map((milestone, index) => {
          const completedCount = milestone.tasks.filter((task) =>
            evaluateRule(task.rule, milestone.startDate).completed,
          ).length;
          const weekPercent = pct(completedCount, milestone.tasks.length);
          const isCurrent = milestone.id === currentWeekId;

          return (
            <article
              key={milestone.id}
              className={`rounded-3xl border p-5 shadow-sm ${
                isCurrent
                  ? "border-orange-300 bg-gradient-to-br from-orange-50 via-white to-pink-50 ring-2 ring-orange-200"
                  : index < 4
                    ? "border-pink-200 bg-gradient-to-br from-pink-50 via-white to-orange-50"
                    : index < 9
                      ? "border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50"
                      : "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-amber-50"
              }`}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {milestone.week}
                    </p>
                    {isCurrent && (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-700">
                        Current week
                      </span>
                    )}
                    {weekPercent === 100 && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                        Cleared
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {milestone.dateRange}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{milestone.theme}</p>
                </div>
                <div className="min-w-[220px] rounded-2xl bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Weekly mission
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {completedCount} / {milestone.tasks.length} tasks complete
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Target: {milestone.completionTarget}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Mastery wins: {milestone.masteryTarget}
                  </p>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-full bg-white/90">
                <div
                  className="h-3 rounded-full bg-slate-900 transition-all duration-500"
                  style={{ width: `${weekPercent}%` }}
                />
              </div>

              <div className="mt-5 grid gap-3">
                {milestone.tasks.map((task) => {
                  const result = evaluateRule(task.rule, milestone.startDate);
                  const isChecked = result.completed;
                  const taskKey = `${milestone.id}:${task.label}`;
                  const isCelebrating = !!celebratingKeys[taskKey];

                  return (
                    <div
                      key={task.label}
                      className={`flex items-start gap-3 rounded-2xl border p-4 transition-colors ${
                        isChecked
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-white bg-white hover:border-orange-200"
                      }`}
                    >
                      {renderMilestoneIcon(isChecked, result.banked, isCelebrating)}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm leading-6 text-slate-800">{task.label}</p>
                          {result.completed && result.banked && (
                            <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                              Banked already
                            </span>
                          )}
                          {result.completed && !result.banked && (
                            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                              Earned this run
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          Progress: {result.progress}{result.suffix || ""} / {result.target}{result.suffix || ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Boss Battle
                  </p>
                  <p className="mt-2 text-sm text-slate-800">{milestone.bossBattle}</p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Reward
                  </p>
                  <p className="mt-2 text-sm text-slate-800">{milestone.reward}</p>
                </div>
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                  Auto-tracked from course progress
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
