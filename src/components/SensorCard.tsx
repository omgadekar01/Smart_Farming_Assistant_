import { Droplets, Thermometer, CloudRain } from '../lib/icons'
import { motion } from '../lib/motion'

const iconMap = {
  moisture: Droplets,
  temperature: Thermometer,
  humidity: Droplets,
  rain: CloudRain,
}

type SensorCardProps = {
  icon: 'moisture' | 'temperature' | 'humidity' | 'rain'
  label: string
  value: string
  status?: string
}

export function SensorCard({ icon, label, value, status }: SensorCardProps) {
  const Icon = iconMap[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-neutral-700 bg-[#303030] p-4 shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:border-green-500/40"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-neutral-800 p-2 text-green-300">
          <Icon className="h-5 w-5" />
        </div>
        {status && (
          <span className="rounded-full border border-neutral-600 bg-neutral-800 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-300">
            {status}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{label}</p>
        <p className="text-2xl font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  )
}
