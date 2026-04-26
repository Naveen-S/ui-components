"use client";

import { useEffect, useMemo, useState } from "react";
import { courseModules, courseSource } from "@/app/DSA/courseContent";

const STORAGE_KEY = "namaste-dsa-progress-v1";

const pct = (value, total) => {
  if (!total) return 0;
  return Math.round((value / total) * 100);
};

const MASTERED_REVISION_TARGET = 2;
const STARRED_MASTERED_REVISION_TARGET = 4;

const formatDate = (value) => {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getTodayKey = () => new Date().toISOString().slice(0, 10);
const getDaySeed = (value) =>
  value.split("-").reduce((total, part) => total + Number(part), 0);
const getDaysBetween = (from, to) => {
  if (!from || !to) return 0;
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diff = toDate.getTime() - fromDate.getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
};
const getRevisionTarget = (progress) =>
  progress?.isStarred ? STARRED_MASTERED_REVISION_TARGET : MASTERED_REVISION_TARGET;

export default function DSAProgressBoard() {
  const [progressMap, setProgressMap] = useState({});
  const [activityLog, setActivityLog] = useState([]);
  const [query, setQuery] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

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
          setActivityLog(parsed.activityLog || []);
        } else {
          setProgressMap(parsed || {});
          setActivityLog([]);
        }
      }
    } catch {
      setProgressMap({});
      setActivityLog([]);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      const payload = JSON.stringify({
        progressMap,
        activityLog,
      });
      window.localStorage.setItem(STORAGE_KEY, payload);
      window.dispatchEvent(
        new CustomEvent("namaste-dsa-progress-updated", {
          detail: {
            progressMap,
            activityLog,
          },
        }),
      );
    } catch {
      // Ignore storage failures so the tracker still works in-memory.
    }
  }, [activityLog, isHydrated, progressMap]);

  const uniqueQuestionCount = useMemo(() => {
    return new Set(courseModules.flatMap((module) => module.items.map((item) => item.id))).size;
  }, []);

  const questionMap = useMemo(() => {
    const map = new Map();
    courseModules.forEach((module) => {
      module.items.forEach((item) => {
        if (!map.has(item.id)) {
          map.set(item.id, {
            ...item,
            moduleId: module.id,
            moduleTitle: module.title,
          });
        }
      });
    });
    return map;
  }, []);

  const completedIds = useMemo(() => {
    return Object.entries(progressMap)
      .filter(([, meta]) => meta?.done)
      .map(([id]) => Number(id));
  }, [progressMap]);

  const completedIdSet = useMemo(() => new Set(completedIds), [completedIds]);

  const completedUniqueCount = completedIds.length;
  const overallPercent = pct(completedUniqueCount, uniqueQuestionCount);
  const todayCount = completedIds.filter(
    (id) => progressMap[id]?.completedOn === getTodayKey(),
  ).length;
  const masteredCount = completedIds.filter(
    (id) =>
      (progressMap[id]?.masteredRevisionCount || 0) >= getRevisionTarget(progressMap[id]),
  ).length;
  const masteryPercent = pct(masteredCount, uniqueQuestionCount);
  const todayKey = getTodayKey();

  const activityDates = useMemo(() => {
    return [...new Set(activityLog)].sort();
  }, [activityLog]);

  const currentStreak = useMemo(() => {
    if (!activityDates.length) return 0;

    const activitySet = new Set(activityDates);
    let streak = 0;
    let cursor = new Date(todayKey);

    while (activitySet.has(cursor.toISOString().slice(0, 10))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }

    return streak;
  }, [activityDates, todayKey]);

  const bestStreak = useMemo(() => {
    if (!activityDates.length) return 0;

    let best = 1;
    let running = 1;

    for (let index = 1; index < activityDates.length; index += 1) {
      const previous = new Date(activityDates[index - 1]);
      const current = new Date(activityDates[index]);
      const diffDays = Math.round((current.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        running += 1;
        best = Math.max(best, running);
      } else if (diffDays > 1) {
        running = 1;
      }
    }

    return best;
  }, [activityDates]);

  const revisionPick = useMemo(() => {
    if (!completedIds.length) return null;

    const rankedCandidates = [...completedIds]
      .map((id) => {
        const progress = progressMap[id] || {};
        const daysSinceCompleted = getDaysBetween(progress.completedOn, todayKey);
        const daysSinceRevision = progress.masteryUpdatedOn
          ? getDaysBetween(progress.masteryUpdatedOn, todayKey)
          : daysSinceCompleted;
        const masteredRevisionCount = progress.masteredRevisionCount || 0;
        const revisionTarget = getRevisionTarget(progress);
        const isMastered = masteredRevisionCount >= revisionTarget;

        // Prefer older problems, de-prioritize recently completed ones, and keep
        // surfacing items that have not yet been fully mastered.
        const score =
          daysSinceRevision * 5 +
          daysSinceCompleted * 3 -
          (isMastered ? 4 : 0) +
          (progress.isStarred ? 8 : 0) -
          (daysSinceCompleted < 3 ? 100 : 0);

        return {
          id,
          score,
          progress,
        };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.id - b.id;
      });

    const topWindow = rankedCandidates.slice(0, Math.min(5, rankedCandidates.length));
    const selectedId = topWindow[getDaySeed(todayKey) % topWindow.length]?.id;
    const question = questionMap.get(selectedId);

    if (!question) return null;

    return {
      ...question,
      progress: progressMap[selectedId] || {},
    };
  }, [completedIds, progressMap, questionMap, todayKey]);

  const filteredModules = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courseModules
      .map((module) => {
        const items = module.items.filter((item) => {
          const matchesQuery =
            !normalizedQuery ||
            module.title.toLowerCase().includes(normalizedQuery) ||
            item.title.toLowerCase().includes(normalizedQuery);
          const isCompleted = completedIdSet.has(item.id);
          if (!matchesQuery) return false;
          if (hideCompleted && isCompleted) return false;
          return true;
        });

        return { ...module, items };
      })
      .filter((module) => module.items.length > 0 || (!normalizedQuery && !hideCompleted));
  }, [completedIdSet, hideCompleted, query]);

  const handleToggle = (id) => {
    setProgressMap((prev) => {
      const current = prev[id];
      if (current?.done) {
        return {
          ...prev,
          [id]: {
            done: false,
            completedOn: null,
            masteryStatus: null,
            masteryUpdatedOn: null,
            masteredRevisionCount: 0,
          },
        };
      }

      return {
        ...prev,
        [id]: {
          ...current,
          done: true,
          completedOn: todayKey,
        },
      };
    });
    setActivityLog((prev) => (prev.includes(todayKey) ? prev : [...prev, todayKey]));
  };

  const handleMasteryUpdate = (id, masteryStatus) => {
    setProgressMap((prev) => {
      const current = prev[id];
      if (!current?.done) return prev;

      const alreadyCountedToday =
        current.masteryStatus === "mastered" && current.masteryUpdatedOn === todayKey;
      const masteredRevisionCount =
        masteryStatus === "mastered"
          ? (current.masteredRevisionCount || 0) + (alreadyCountedToday ? 0 : 1)
          : current.masteredRevisionCount || 0;

      return {
        ...prev,
        [id]: {
          ...current,
          masteryStatus,
          masteryUpdatedOn: todayKey,
          masteredRevisionCount,
        },
      };
    });
    setActivityLog((prev) => (prev.includes(todayKey) ? prev : [...prev, todayKey]));
  };

  const handleStarToggle = (id) => {
    setProgressMap((prev) => {
      const current = prev[id] || {};

      return {
        ...prev,
        [id]: {
          ...current,
          isStarred: !current.isStarred,
        },
      };
    });
  };

  const renderStarButton = (id, isStarred, compact = false) => {
    return (
      <button
        aria-label={isStarred ? "Unstar hard problem" : "Star as hard problem"}
        className={`inline-flex items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
          isStarred
            ? "border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200"
            : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-800"
        } ${compact ? "h-8 w-8" : "h-10 w-10"}`}
        onClick={(event) => {
          event.preventDefault();
          handleStarToggle(id);
        }}
        type="button"
      >
        <span aria-hidden="true" className={compact ? "text-sm" : "text-base"}>
          {isStarred ? "★" : "☆"}
        </span>
      </button>
    );
  };

  const clearProgress = () => {
    const confirmed = window.confirm("Clear all saved Namaste DSA progress?");
    if (confirmed) {
      setProgressMap({});
      setActivityLog([]);
    }
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Live course progress</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Track the full public Namaste DSA course outline with persistent checkmarks
            stored in your browser. This is the momentum layer that gives you visible
            completion feedback while you work through the syllabus.
          </p>
        </div>
        <a
          className="text-sm font-medium text-pink-600 underline-offset-4 hover:underline"
          href={courseSource.url}
          rel="noreferrer"
          target="_blank"
        >
          View source outline
        </a>
      </div>

      <div className="mt-6 rounded-3xl border border-amber-300 bg-gradient-to-r from-amber-100 via-orange-50 to-rose-100 p-6 shadow-sm">
        {revisionPick ? (
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Today&apos;s revision pick
              </p>
              <h3 className="mt-2 text-2xl font-bold text-amber-950">
                {revisionPick.id}. {revisionPick.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-amber-900">
                From {revisionPick.moduleTitle}. This pick now favors questions you completed longer ago
                and have not revised recently, so the banner keeps pulling older material back into focus.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full bg-white/80 px-3 py-1 text-amber-900">
                  Completed on {formatDate(revisionPick.progress.completedOn)}
                </span>
                {revisionPick.progress?.masteryUpdatedOn ? (
                  <span className="rounded-full bg-white/80 px-3 py-1 text-amber-900">
                    Last revised on {formatDate(revisionPick.progress.masteryUpdatedOn)}
                  </span>
                ) : (
                  <span className="rounded-full bg-white/80 px-3 py-1 text-amber-900">
                    No revision logged yet
                  </span>
                )}
                <span className="rounded-full bg-white/80 px-3 py-1 text-amber-900">
                  Revision wins {revisionPick.progress?.masteredRevisionCount || 0} / {getRevisionTarget(revisionPick.progress)}
                </span>
                {revisionPick.progress?.isStarred && (
                  <span className="rounded-full bg-amber-900 px-3 py-1 text-white">
                    Hard for me
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                onClick={() => handleMasteryUpdate(revisionPick.id, "mastered")}
                type="button"
              >
                Mark mastered
              </button>
              <button
                className="rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
                onClick={() => handleMasteryUpdate(revisionPick.id, "not mastered")}
                type="button"
              >
                Not mastered yet
              </button>
              {renderStarButton(revisionPick.id, !!revisionPick.progress?.isStarred)}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Today&apos;s revision pick
            </p>
            <p className="mt-2 text-sm text-amber-950">
              Complete a few lessons first and this banner will start surfacing older completed questions for daily revision.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-pink-200 bg-pink-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-pink-700">
                Completion tracker
              </p>
              <h3 className="mt-2 text-2xl font-bold text-pink-950">{overallPercent}% complete</h3>
              <p className="mt-1 text-sm text-pink-700">
                {completedUniqueCount} / {uniqueQuestionCount} lessons completed at least once
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-pink-600">Remaining</p>
              <p className="mt-1 text-2xl font-bold text-pink-950">
                {uniqueQuestionCount - completedUniqueCount}
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-full bg-pink-100">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-pink-700">
            Completed today: <span className="font-semibold text-pink-950">{todayCount}</span>
          </p>
        </section>

        <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-700">
                Mastery tracker
              </p>
              <h3 className="mt-2 text-2xl font-bold text-indigo-950">{masteryPercent}% mastered</h3>
              <p className="mt-1 text-sm text-indigo-700">
                {masteredCount} / {uniqueQuestionCount} lessons earned the mastery badge
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">Target</p>
              <p className="mt-1 text-2xl font-bold text-indigo-950">
                {MASTERED_REVISION_TARGET} revisions
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-full bg-indigo-100">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 transition-all duration-500"
              style={{ width: `${masteryPercent}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-indigo-700">
            Earned after <span className="font-semibold text-indigo-950">{MASTERED_REVISION_TARGET}</span> revision passes,
            or <span className="font-semibold text-indigo-950">{STARRED_MASTERED_REVISION_TARGET}</span> if the problem is starred as hard.
          </p>
        </section>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-sm font-medium text-emerald-700">Completed today</p>
          <p className="mt-3 text-3xl font-bold text-emerald-900">{todayCount}</p>
          <p className="mt-1 text-sm text-emerald-700">Small wins count. Keep the chain moving.</p>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-sm font-medium text-orange-700">Current streak</p>
          <p className="mt-3 text-3xl font-bold text-orange-900">{currentStreak}</p>
          <p className="mt-1 text-sm text-orange-700">Days in a row with completion or revision activity.</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-medium text-amber-700">Best streak</p>
          <p className="mt-3 text-3xl font-bold text-amber-900">{bestStreak}</p>
          <p className="mt-1 text-sm text-amber-700">Your longest active run so far.</p>
        </div>
        <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <p className="text-sm font-medium text-violet-700">Tracked modules</p>
          <p className="mt-3 text-3xl font-bold text-violet-900">{courseModules.length}</p>
          <p className="mt-1 text-sm text-violet-700">From Introduction to Tries.</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-pink-300"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic or lesson name"
            value={query}
          />
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
            <input
              checked={hideCompleted}
              onChange={(event) => setHideCompleted(event.target.checked)}
              type="checkbox"
            />
            Hide completed
          </label>
        </div>
        <button
          className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-rose-300 hover:text-rose-600"
          onClick={clearProgress}
          type="button"
        >
          Reset progress
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">{masteredCount}</span> lessons have earned the mastered badge after{" "}
        {MASTERED_REVISION_TARGET} successful revision passes.
      </div>

      <div className="mt-6 space-y-4">
        {filteredModules.map((module) => {
          const moduleCompleted = module.items.filter((item) => completedIdSet.has(item.id)).length;
          const modulePercent = pct(moduleCompleted, module.items.length);

          return (
            <details
              key={module.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              open={modulePercent < 100}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {moduleCompleted} / {module.items.length} completed
                    </p>
                  </div>
                  <div className="flex min-w-[220px] items-center gap-3">
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-3 rounded-full bg-slate-900 transition-all duration-500"
                        style={{ width: `${modulePercent}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{modulePercent}%</span>
                  </div>
                </div>
              </summary>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {module.items.map((item) => {
                  const isDone = completedIdSet.has(item.id);
                  const completionDate = progressMap[item.id]?.completedOn;
                  const itemProgress = progressMap[item.id] || {};
                  const masteredRevisionCount = itemProgress.masteredRevisionCount || 0;
                  const revisionTarget = getRevisionTarget(itemProgress);
                  const isMastered = masteredRevisionCount >= revisionTarget;

                  return (
                    <label
                      key={`${module.id}-${item.id}`}
                      className={`flex gap-3 rounded-2xl border p-4 transition-colors ${
                        isDone
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-white bg-white hover:border-pink-200"
                      }`}
                    >
                      <input
                        checked={isDone}
                        onChange={() => handleToggle(item.id)}
                        className="mt-1 h-4 w-4 accent-emerald-600"
                        type="checkbox"
                      />
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-slate-900">
                              {item.id}. {item.title}
                            </p>
                            {itemProgress.isStarred && (
                              <span className="rounded-full bg-amber-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                                Hard
                              </span>
                            )}
                            {isMastered && (
                              <span className="rounded-full bg-indigo-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-indigo-700">
                                Mastered
                              </span>
                            )}
                          </div>
                          <div className="shrink-0">
                            {renderStarButton(item.id, !!itemProgress.isStarred, true)}
                          </div>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          {isDone && completionDate
                            ? `Completed on ${formatDate(completionDate)}`
                            : "Mark complete when you can explain the pattern and solve it cleanly."}
                        </p>
                        {isDone && (
                          <p className="mt-1 text-xs text-slate-500">
                            Revision wins: {masteredRevisionCount} / {revisionTarget}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
