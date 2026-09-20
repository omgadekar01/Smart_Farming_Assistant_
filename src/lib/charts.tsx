import type { ReactNode } from 'react'
export function ResponsiveContainer({ children, height = '100%' }: { children: ReactNode; width?: string | number; height?: string | number }) { return <div style={{ width: '100%', height }}>{children}</div> }
export function AreaChart({ children }: { children: ReactNode; data?: unknown[] }) { return <div className="h-full min-h-[220px] rounded-xl bg-neutral-900/40 p-3">{children}<div className="flex h-[170px] items-end gap-2 border-b border-l border-neutral-700 px-3 pb-2">{[35, 58, 44, 72, 55, 78, 66, 84].map((height, index) => <span key={index} className="flex-1 rounded-t bg-green-400/70" style={{ height: `${height}%` }} />)}</div></div> }
export function CartesianGrid() { return null }
export function Tooltip() { return null }
export function XAxis() { return null }
export function YAxis() { return null }
export function Area() { return null }
