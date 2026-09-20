export type RainStatus = 'Rain' | 'No Rain'

export type SensorData = {
  soilMoisture: number
  temperature: number
  humidity: number
  rainStatus: RainStatus
}

export type CropData = {
  name: string
  health: string
  diseaseRisk: string
  confidence: number
}

export type RecommendationSeverity = 'low' | 'medium' | 'high' | 'normal'

export type Recommendation = {
  title: string
  message: string
  severity: RecommendationSeverity
  action: string
}

export type AlertItem = {
  id: string
  title: string
  description: string
  timestamp: string
  severity: 'LOW' | 'MEDIUM' | 'HIGH'
  icon: 'droplets' | 'thermometer' | 'shield' | 'cloud-rain' | 'sprout'
}

export type SettingsState = {
  farmName: string
  location: string
  crop: string
  farmSize: string
  moistureThreshold: number
  temperatureThreshold: number
  humidityThreshold: number
  irrigationAlerts: boolean
  diseaseAlerts: boolean
  weatherAlerts: boolean
  darkMode: boolean
  notifications: boolean
}

export type HistoryPoint = {
  date: string
  soilMoisture: number
  temperature: number
  humidity: number
}
