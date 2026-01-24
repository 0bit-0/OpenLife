import DailySummary from "../../components/DailySummary/DailySummary";
import Tasks from "../../components/Tasks/Tasks";
import Timer from "../../components/Timer/Timer";
import Button from "../../components/Button/Button";

// Reusable Card component
const Card = ({ title, children }) => (
  <div className="hover-grid group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
    <h2 className="mb-2 text-base sm:text-lg md:text-lg font-semibold text-white">{title}</h2>
    {children}
  </div>
);

// Responsive Bar Chart component
const BarChart = ({ data }) => (
  <div className="flex items-end gap-3 w-full overflow-x-auto">
    {data.map((d, i) => (
      <div key={i} className="flex flex-col items-center flex-1 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
        <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-800/20 rounded flex items-end">
          <div
            className="w-full rounded-t bg-gradient-to-t from-emerald-500 to-green-400 transition-all duration-700"
            style={{ height: `${d.value}%` }}
          />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 text-center">{d.label}</p>
      </div>
    ))}
  </div>
);

export default function Dashboard() {
  const workflowData = [
    { label: "Coding", value: 70 },
    { label: "Meetings", value: 40 },
    { label: "Learning", value: 50 },
    { label: "Breaks", value: 30 },
    { label: "Exercise", value: 60 },
    { label: "Emails", value: 20 },
  ];

  const reflectionData = [
    { label: "Morning", value: 80 },
    { label: "Afternoon", value: 50 },
    { label: "Evening", value: 60 },
  ];

  return (
    <div className="space-y-8 px-[var(--page-gutter)] py-6">

      {/* Header */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="hover-grid rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 sm:p-7 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Dashboard</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Your Daily Workflow Overview</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-slate-200">
            Track focus, visualize tasks, and reflect on your day — all in one view.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
            <Button to="/showcase" variant="primary">Explore UI</Button>
            <Button to="/contribute" variant="secondary">Contribute</Button>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-2 py-1">Focus blocks</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-2 py-1">Time insights</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-2 py-1">Daily review</span>
          </div>
        </div>

        {/* Focus snapshot */}
        <div className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Focus snapshot</p>
          <div className="mt-2 sm:mt-4 grid gap-4 sm:grid-cols-2">
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-300">Today</p>
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">4h 30m</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-300">Deep work</p>
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">3 blocks</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-300">Breaks</p>
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">4</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-300">Energy</p>
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">High</p>
            </div>
          </div>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-300">Quick glance of your day’s performance.</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card title="What OpenLife is">
          Helps you organize tasks, plan time, and stay focused. Beginner-friendly.
        </Card>
        <Card title="Why time awareness matters">
          Reduces stress, avoids last-minute rush, improves focus & control.
        </Card>
        <Card title="How beginners can contribute">
          Edit placeholders, try layouts, small PRs are perfect to start.
        </Card>
      </div>

      {/* Workflow & Reflection Charts */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <Card title="Daily Workflow">
          <BarChart data={workflowData} />
        </Card>
        <Card title="Reflection">
          <BarChart data={reflectionData} />
        </Card>
      </div>

      {/* Tasks + Timer + Daily Summary */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Tasks />
        <Timer />
        <DailySummary />
      </div>
    </div>
  );
}
