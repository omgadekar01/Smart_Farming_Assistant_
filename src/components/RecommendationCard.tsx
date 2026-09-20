import { AlertTriangle, Droplets, ShieldCheck, TrendingUp } from '../lib/icons'
import { motion } from '../lib/motion'
import type { Recommendation } from '../types'

const severityStyles = {
  normal: 'border-green-500/30 bg-green-500/5 text-green-300',
  low: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-200',
  medium: 'border-orange-500/30 bg-orange-500/5 text-orange-200',
  high: 'border-red-500/30 bg-red-500/5 text-red-200',
}

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const Icon = recommendation.severity === 'high' ? AlertTriangle : recommendation.severity === 'normal' ? ShieldCheck : Droplets

  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-neutral-700 bg-[#303030] p-4 shadow-lg shadow-black/10"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-neutral-800 p-2 text-green-300">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-white">Recommendation</h3>
        </div>
        <div className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${severityStyles[recommendation.severity]}`}>
          {recommendation.severity}
        </div>
      </div>

      <div className={`rounded-2xl border p-3 ${severityStyles[recommendation.severity]}`}>
        <div className="mb-3 flex items-center gap-2">
          <Icon className="h-5 w-5" />
          <span className="text-lg font-bold uppercase tracking-[0.12em]">{recommendation.title}</span>
        </div>
        <p className="text-sm leading-6 text-neutral-100">{recommendation.message}</p>
      </div>

      <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-900/80 p-3">
        <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Action</p>
        <p className="mt-2 text-sm text-neutral-200">{recommendation.action}</p>
      </div>
    </motion.div>
  )
}
