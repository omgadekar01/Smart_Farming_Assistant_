import { AlertTriangle, CloudRain, Droplets, ShieldAlert, Sprout } from '../lib/icons'
import type { AlertItem } from '../types'

const iconMap = {
  droplets: Droplets,
  thermometer: AlertTriangle,
  shield: ShieldAlert,
  'cloud-rain': CloudRain,
  sprout: Sprout,
}

const severityStyles = {
  LOW: 'border-green-500/30 bg-green-500/10 text-green-300',
  MEDIUM: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-200',
  HIGH: 'border-red-500/30 bg-red-500/10 text-red-200',
}

export function AlertCard({ alert }: { alert: AlertItem }) {
  const Icon = iconMap[alert.icon]

  return (
    <div className="rounded-2xl border border-neutral-700 bg-[#303030] p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-2 text-green-300">
          <Icon className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-white">{alert.title}</h3>
            <span className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${severityStyles[alert.severity]}`}>
              {alert.severity}
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-300">{alert.description}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
            <span>{alert.timestamp}</span>
            <span>Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  )
}
