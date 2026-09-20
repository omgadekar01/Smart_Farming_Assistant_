import { defaultSensorData } from '../data/mockSensorData'
import type { SensorData } from '../types'

export function generateSensorData(): SensorData {
  const soilMoisture = Math.floor(Math.random() * 50) + 22
  const temperature = Number((Math.random() * 10 + 26).toFixed(1))
  const humidity = Math.floor(Math.random() * 35) + 45
  const rainStatus: SensorData['rainStatus'] = Math.random() > 0.6 ? 'Rain' : 'No Rain'

  return {
    soilMoisture,
    temperature,
    humidity,
    rainStatus,
  }
}

export function resetDemoSensorData(): SensorData {
  return { ...defaultSensorData }
}
