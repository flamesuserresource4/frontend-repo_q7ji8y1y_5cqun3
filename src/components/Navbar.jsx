import { useState } from 'react'
import { Menu, X, Github, Mail, Calendar, Home, User, FolderOpen, FileText, MessageSquare, ListChecks, Wrench } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/blog', label: 'Blog', icon: FileText },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/guestbook', label: 'Guestbook', icon: MessageSquare },
  { to: '/bucket', label: 'Bucket List', icon: ListChecks },
  { to: '/uses', label: 'Uses', icon: Wrench },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 ring-2 ring-cyan-400/50 shadow-sm animate-pulse" />
            <span className="text-white font-semibold">Your Name</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `px-3 py-2 text-sm rounded-lg transition-colors ${isActive ? 'text-white bg-white/10' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </NavLink>
            ))}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-900 font-medium hover:brightness-110 transition">
              <Github size={16} /> GitHub
            </a>
            <a href="#book" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300/10 transition">
              <Calendar size={16} /> Book
            </a>
          </nav>

          <button className="md:hidden text-zinc-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'text-zinc-200 hover:bg-white/5'}`}>
                <Icon size={16} /> {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
