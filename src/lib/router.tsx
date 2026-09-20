import { useEffect, useState, type ReactNode } from 'react'

export function BrowserRouter({ children }: { children: ReactNode }) { return <>{children}</> }
export function Navigate({ to }: { to: string; replace?: boolean }) {
  useEffect(() => { window.history.replaceState({}, '', to); window.dispatchEvent(new PopStateEvent('popstate')) }, [to])
  return null
}
export function Route({ element }: { path: string; element: ReactNode }) { return <>{element}</> }
export function Routes({ children }: { children: ReactNode }) {
  const [, refresh] = useState(0)
  useEffect(() => { const update = () => refresh((value) => value + 1); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, [])
  const routes = Array.isArray(children) ? children : [children]
  const current = window.location.pathname
  const match = routes.find((route) => route && typeof route === 'object' && 'props' in route && ((route as { props: { path?: string } }).props.path === current || (route as { props: { path?: string } }).props.path === '*'))
  return match && typeof match === 'object' && 'props' in match ? (match as { props: { element: ReactNode } }).props.element : null
}
export function NavLink({ to, className, children, onClick }: { to: string; className?: string | ((args: { isActive: boolean }) => string); children: ReactNode; onClick?: () => void }) {
  const isActive = window.location.pathname === to
  const classes = typeof className === 'function' ? className({ isActive }) : className
  return <a href={to} className={classes} onClick={onClick}>{children}</a>
}
