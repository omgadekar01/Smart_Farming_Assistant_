import { Bell, History, Home, Settings } from '../lib/icons'
import { NavLink } from '../lib/router'

const navItems = [
  { label: 'Dashboard', path: '/', icon: Home },
  { label: 'History', path: '/history', icon: History },
  { label: 'Alert', path: '/alerts', icon: Bell },
  { label: 'Setting', path: '/settings', icon: Settings },
]

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-[1200px] px-4 pb-3 pt-2">
      <div className="flex items-center justify-between rounded-2xl border border-neutral-700 bg-[#1d1d1d]/95 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-sm">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium transition ${
                isActive ? 'bg-green-500/15 text-green-300' : 'text-neutral-300 hover:bg-neutral-800'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
