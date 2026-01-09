import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

// Simple layout for OpenLife pages
export default function BaseLayout({ title = 'OpenLife', subtitle = 'Daily Workflow & Time Management', children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-200">OpenLife</p>
            <p className="text-xs text-slate-300">{subtitle}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              to="/"
            >
              Home
            </Link>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              href="https://github.com/BhupinderSehjal/OpenLife"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          <p className="text-sm text-slate-300">{subtitle}</p>
        </div>
        {children}
      </main>

      <Footer />
    </div>
  )
}
