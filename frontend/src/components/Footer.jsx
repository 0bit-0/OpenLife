import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row text-xs text-slate-400">
        
        {/* Left Side: Tech Stack */}
        <div className="flex items-center gap-2">
          <span>Built with React + Vite + Tailwind</span>
        </div>

        {/* Center/Right: Navigation Links */}
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/contribute" className="hover:text-white transition-colors">Contribute</Link>
        </nav>

        {/* Right Side: Copyright/Status */}
        <div>
          <span>&copy; {new Date().getFullYear()} OpenLife</span>
        </div>
        
      </div>
    </footer>
  );
}