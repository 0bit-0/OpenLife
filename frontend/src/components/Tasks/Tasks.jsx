import useStarterTasks from '../hooks/useStarterTasks'

// Placeholder tasks list that beginners can expand
export default function Tasks() {
  const tasks = useStarterTasks()

  // BEGINNER: Swap the sample tasks below for your own data or UI
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.35)]">
      <div className="mb-2 text-sm font-semibold text-white">Tasks</div>
      <ul className="space-y-1 text-sm text-slate-300">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
            {task.title}
          </li>
        ))}
      </ul>
      {/* BEGINNER: Add inputs, checkboxes, or drag-and-drop here */}
    </div>
  )
}
