import { motion } from '../lib/motion'
import { Sprout } from '../lib/icons'

type CropCardProps = {
  cropName: string
}

export function CropCard({ cropName }: CropCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-neutral-700 bg-[#303030] p-4 shadow-lg shadow-black/10"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Crop</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{cropName}</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-300 ring-1 ring-green-500/30">
          <Sprout className="h-6 w-6" />
        </div>
      </div>
    </motion.div>
  )
}
