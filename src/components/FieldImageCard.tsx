import { motion } from '../lib/motion'
import { ImageUp } from '../lib/icons'
import { useRef } from 'react'

type FieldImageCardProps = {
  imageSrc: string
  onImageChange: (newSrc: string) => void
}

export function FieldImageCard({ imageSrc, onImageChange }: FieldImageCardProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : imageSrc
      onImageChange(result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-neutral-700 bg-[#303030] p-4 shadow-lg shadow-black/10"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Field Image</h3>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-2 rounded-xl border border-neutral-600 bg-neutral-800 px-3 py-2 text-xs font-medium text-neutral-200 transition hover:border-green-500/50 hover:text-white"
        >
          <ImageUp className="h-4 w-4 text-green-300" />
          Change image
        </button>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleChange} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900">
        <img src={imageSrc} alt="Agricultural field" className="h-56 w-full object-cover md:h-64" />
      </div>
    </motion.div>
  )
}
