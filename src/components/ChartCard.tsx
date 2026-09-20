import type { ReactNode } from 'react'

type ChartCardProps = {
  title: string
  children: ReactNode
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-700 bg-[#303030] p-4 shadow-lg shadow-black/10">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="h-56 w-full">{children}</div>
    </div>
  )
}
