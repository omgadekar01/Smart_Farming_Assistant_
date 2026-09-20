import type { HTMLAttributes } from 'react'

type IconProps = HTMLAttributes<HTMLSpanElement>

function makeIcon(symbol: string) {
  return function Icon({ className = '', ...props }: IconProps) {
    return <span aria-hidden="true" className={`inline-flex items-center justify-center leading-none ${className}`} {...props}>{symbol}</span>
  }
}

export const AlertTriangle = makeIcon('!')
export const CloudRain = makeIcon('☁')
export const Droplets = makeIcon('◌')
export const ShieldAlert = makeIcon('◇')
export const Sprout = makeIcon('✦')
export const Bell = makeIcon('◉')
export const History = makeIcon('◷')
export const Home = makeIcon('⌂')
export const Settings = makeIcon('⚙')
export const Menu = makeIcon('☰')
export const Leaf = makeIcon('❧')
export const ChevronRight = makeIcon('›')
export const ImageUp = makeIcon('↑')
export const ShieldCheck = makeIcon('✓')
export const Shield = makeIcon('◇')
export const TrendingUp = makeIcon('↗')
export const Thermometer = makeIcon('°')
export const Activity = makeIcon('⋯')
export const Sparkles = makeIcon('✧')
export const Wand2 = makeIcon('✺')
export const Check = makeIcon('✓')
export const Moon = makeIcon('☾')
export const Sun = makeIcon('☀')
export const Waves = makeIcon('≈')
