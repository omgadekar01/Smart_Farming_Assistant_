import { AnimatePresence, motion } from '../lib/motion'
import { Menu, Leaf, Bell, ChevronRight } from '../lib/icons'
import { NavLink } from '../lib/router'

const navItems = [
  { label: 'Dashboard', path: '/', icon: Leaf },
  { label: 'History', path: '/history', icon: Bell },
  { label: 'Alerts', path: '/alerts', icon: Bell },
  { label: 'Settings', path: '/settings', icon: Bell },
]

type HeaderProps = {
  status: 'Active'
}

export function Header({ status }: HeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-neutral-700 bg-[#1b1b1b] px-4 py-3 shadow-lg shadow-black/20">
      <button
        type="button"
        aria-label="Open navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 text-neutral-200 transition hover:border-green-400/70 hover:text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-lg font-semibold tracking-wide text-white sm:text-xl">Smart Farming Assistant</h1>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/80 px-2.5 py-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-green-300">{status}</span>
      </div>
    </header>
  )
}

export function SidebarDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.aside
          initial={{ x: -320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -320, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed inset-y-0 left-0 z-50 w-[290px] border-r border-neutral-700 bg-[#111111] p-4 shadow-2xl shadow-black/50"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-green-400">System</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Smart Farming Assistant</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg border border-neutral-700 px-2 py-1 text-sm text-neutral-300"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'border border-green-500/40 bg-green-500/10 text-green-300'
                      : 'bg-neutral-900 text-neutral-200 hover:bg-neutral-800'
                  }`
                }
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ChevronRight className="h-4 w-4 opacity-60" />
              </NavLink>
            ))}
          </nav>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}
