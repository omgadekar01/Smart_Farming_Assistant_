import type { ReactNode } from 'react'

type PageContainerProps = {
  title?: string
  children: ReactNode
}

export function PageContainer({ title, children }: PageContainerProps) {
  return (
    <div className="space-y-4">
      {title ? <h2 className="text-xl font-semibold text-white">{title}</h2> : null}
      <div className="rounded-2xl border border-neutral-700 bg-[#1d1d1d] p-4 shadow-xl shadow-black/10">
        {children}
      </div>
    </div>
  )
}
