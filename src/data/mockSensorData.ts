import type { HistoryPoint, SensorData } from '../types'

export const defaultSensorData: SensorData = {
  soilMoisture: 28,
  temperature: 31.4,
  humidity: 58,
  rainStatus: 'No Rain',
}

export const defaultCropName = 'Soybean'

export const historyData: HistoryPoint[] = [
  { date: 'Sep 15', soilMoisture: 42, temperature: 29, humidity: 61 },
  { date: 'Sep 16', soilMoisture: 38, temperature: 30, humidity: 59 },
  { date: 'Sep 17', soilMoisture: 35, temperature: 31, humidity: 57 },
  { date: 'Sep 18', soilMoisture: 33, temperature: 32.5, humidity: 55 },
  { date: 'Sep 19', soilMoisture: 30, temperature: 31.7, humidity: 58 },
  { date: 'Sep 20', soilMoisture: 28, temperature: 31.4, humidity: 58 },
  { date: 'Sep 21', soilMoisture: 46, temperature: 30.4, humidity: 62 },
  { date: 'Sep 22', soilMoisture: 52, temperature: 29.8, humidity: 64 },
]

export const defaultSettings = {
  farmName: 'Green Valley Farm',
  location: 'Nashik, Maharashtra',
  crop: 'Soybean',
  farmSize: '18 acres',
  moistureThreshold: 35,
  temperatureThreshold: 34,
  humidityThreshold: 70,
  irrigationAlerts: true,
  diseaseAlerts: true,
  weatherAlerts: true,
  darkMode: true,
  notifications: true,
}
