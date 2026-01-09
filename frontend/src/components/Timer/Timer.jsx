// Placeholder timer that beginners can wire up to state or libraries
export default function Timer() {
  // BEGINNER: Hook up setInterval or a library like dayjs here
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.35)]">
      <div className="mb-2 text-sm font-semibold text-white">Timer</div>
      <p className="text-sm text-slate-300">
        Track a focus session or break here. Add buttons, countdowns, or alarms when you are ready.
      </p>
    </div>
  )
}
