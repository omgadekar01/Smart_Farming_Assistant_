import { Children, useEffect, useState, type ReactNode } from 'react'

export function BrowserRouter({ children }: { children: ReactNode }) { return <>{children}</> }
export function Navigate({ to }: { to: string; replace?: boolean }) {
  useEffect(() => { window.history.replaceState({}, '', to); window.dispatchEvent(new PopStateEvent('popstate')) }, [to])
  return null
}
export function Route({ element }: { path: string; element: ReactNode }) { return <>{element}</> }
export function Routes({ children }: { children: ReactNode }) {
  const [, refresh] = useState(0)
  useEffect(() => { const update = () => refresh((value) => value + 1); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, [])
  const routes = Children.toArray(children)
  const current = window.location.pathname
  const match = routes.find((route) => {
    if (!route || typeof route !== 'object' || !('props' in route)) return false
    const path = (route as { props: { path?: string } }).props.path
    return path === current || path === '*'
  })
  return match && typeof match === 'object' && 'props' in match ? (match as { props: { element: ReactNode } }).props.element : null
}
export function NavLink({ to, className, children, onClick }: { to: string; className?: string | ((args: { isActive: boolean }) => string); children: ReactNode; onClick?: () => void }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => { const update = () => setCurrentPath(window.location.pathname); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, [])
  const isActive = currentPath === to
  const classes = typeof className === 'function' ? className({ isActive }) : className
  return <a href={to} className={classes} onClick={(event) => { event.preventDefault(); window.history.pushState({}, '', to); window.dispatchEvent(new PopStateEvent('popstate')); onClick?.() }}>{children}</a>
}
