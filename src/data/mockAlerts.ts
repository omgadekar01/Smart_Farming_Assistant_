import type { AlertItem } from '../types'

export const mockAlerts: AlertItem[] = [
  {
    id: 'a1',
    title: 'Low soil moisture',
    description: 'Topsoil moisture is falling below the recommended threshold for soybean growth.',
    timestamp: '10 minutes ago',
    severity: 'HIGH',
    icon: 'droplets',
  },
  {
    id: 'a2',
    title: 'High temperature',
    description: 'Field temperature is elevated and may stress canopy formation this afternoon.',
    timestamp: '25 minutes ago',
    severity: 'MEDIUM',
    icon: 'thermometer',
  },
  {
    id: 'a3',
    title: 'Disease detected',
    description: 'Leaf stress pattern suggests a low risk of fungal disease under current canopy conditions.',
    timestamp: '1 hour ago',
    severity: 'LOW',
    icon: 'shield',
  },
  {
    id: 'a4',
    title: 'Heavy rainfall',
    description: 'Weather forecast indicates a high chance of rain in the next 3 hours.',
    timestamp: '2 hours ago',
    severity: 'MEDIUM',
    icon: 'cloud-rain',
  },
  {
    id: 'a5',
    title: 'Irrigation required',
    description: 'Automated irrigation cycle recommended to recover soil moisture to optimal range.',
    timestamp: '3 hours ago',
    severity: 'HIGH',
    icon: 'sprout',
  },
]
