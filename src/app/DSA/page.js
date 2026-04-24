import {
  auditTopics,
  phases,
  readinessChecks,
  recurringMistakes,
  studyCadence,
  topicRoadmap,
  trackerBuckets,
} from "./data";
import DSAProgressBoard from "@/components/DSAProgressBoard";

const statusStyles = {
  Solid: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Needs revisit": "bg-amber-100 text-amber-700 border-amber-200",
  Incomplete: "bg-rose-100 text-rose-700 border-rose-200",
  Missing: "bg-slate-100 text-slate-700 border-slate-200",
  "Early glimpse only": "bg-sky-100 text-sky-700 border-sky-200",
};

const roadmapStyles = {
  "Foundation built": "bg-emerald-100 text-emerald-700",
  "Partially built": "bg-amber-100 text-amber-700",
  "Strong head start": "bg-teal-100 text-teal-700",
  "Good base": "bg-sky-100 text-sky-700",
  "Light coverage": "bg-orange-100 text-orange-700",
  "Not started": "bg-slate-100 text-slate-700",
  "Early glimpse only": "bg-indigo-100 text-indigo-700",
  "Later phase": "bg-violet-100 text-violet-700",
};

const summaryCounts = auditTopics.reduce(
  (acc, topic) => {
    topic.items.forEach((item) => {
      if (item.state === "Solid") acc.solid += 1;
      if (item.state === "Needs revisit") acc.revisit += 1;
      if (item.state === "Incomplete") acc.incomplete += 1;
      if (item.state === "Missing" || item.state === "Early glimpse only") acc.gaps += 1;
    });
    return acc;
  },
  { solid: 0, revisit: 0, incomplete: 0, gaps: 0 },
);

const summaryCards = [
  { label: "Current solid references", value: summaryCounts.solid, tone: "border-emerald-200 bg-emerald-50 text-emerald-800" },
  { label: "Problems to re-solve", value: summaryCounts.revisit, tone: "border-amber-200 bg-amber-50 text-amber-800" },
  { label: "Incomplete files", value: summaryCounts.incomplete, tone: "border-rose-200 bg-rose-50 text-rose-800" },
  { label: "Major topic gaps", value: summaryCounts.gaps, tone: "border-slate-200 bg-slate-50 text-slate-800" },
];

export default function DSAPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-900">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
              Namaste DSA Workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Interview-readiness system built around your current repo
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This page turns the high-level DSA plan into a concrete working system:
              current audit, topic roadmap, revision loop, and mock-readiness
              criteria. Use it as the source of truth while you pause UI work and
              focus on DSA completion.
            </p>
          </div>
          <div className="grid min-w-[260px] gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Current recommendation</p>
            <p>Phase 1 now: finish audit cleanup before opening major new topics.</p>
            <p>Next untouched priorities: two pointers, sliding window, trees.</p>
            <p>Study horizon: 2-3 months, optimized for retention over rushing.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div key={card.label} className={`rounded-2xl border p-5 ${card.tone}`}>
            <p className="text-sm font-medium">{card.label}</p>
            <p className="mt-3 text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </section>

      <DSAProgressBoard />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Phase plan</h2>
          <div className="mt-5 space-y-4">
            {phases.map((phase) => (
              <article key={phase.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{phase.goal}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {phase.outputs.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Weekly cadence</h2>
            <div className="mt-4 grid gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Weekdays</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {studyCadence.weekdays.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Weekends</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {studyCadence.weekends.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Tracker buckets</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {trackerBuckets.map((bucket) => (
                <span
                  key={bucket}
                  className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700"
                >
                  {bucket}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Promotion rule: a problem only becomes <strong>solved independently</strong>{" "}
              after one clean re-solve without help.
            </p>
          </section>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-slate-900">Topic roadmap</h2>
          <p className="text-sm text-slate-600">
            Follow this order instead of hopping randomly across the course.
          </p>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {topicRoadmap.map((item) => (
            <article key={item.topic} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-semibold text-slate-900">{item.topic}</h3>
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${roadmapStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-slate-900">Current audit</h2>
          <p className="text-sm text-slate-600">
            This is your starting point for Phase 1. Use it to decide what to keep,
            what to re-solve, and what to postpone until later.
          </p>
        </div>
        <div className="mt-5 space-y-5">
          {auditTopics.map((section) => (
            <article key={section.topic} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{section.topic}</h3>
                  <p className="mt-1 text-sm text-slate-600">{section.note}</p>
                </div>
                <span className="w-fit rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                  {section.status}
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white bg-white p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <span
                        className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${
                          statusStyles[item.state] || "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {item.state}
                      </span>
                    </div>
                    {item.reason && (
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.reason}</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Recurring mistakes to track</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {recurringMistakes.map((mistake) => (
              <li key={mistake}>• {mistake}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Readiness checks</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {readinessChecks.map((check) => (
              <li key={check}>• {check}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
