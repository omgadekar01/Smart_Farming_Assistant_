import type { Recommendation, RainStatus } from '../types'

export function getRecommendation(
  soilMoisture: number,
  temperature: number,
  humidity: number,
  rainStatus: RainStatus,
  crop: string,
): Recommendation {
  if (soilMoisture < 35 && rainStatus === 'No Rain') {
    return {
      title: 'IRRIGATION REQUIRED',
      message: 'Soil moisture is below recommended range for healthy crop development.',
      severity: 'high',
      action: 'Trigger scheduled irrigation for the current zone.',
    }
  }

  if (soilMoisture < 35 && rainStatus === 'Rain') {
    return {
      title: 'WAIT — RAIN DETECTED',
      message: `Natural rainfall is likely reducing irrigation demand for ${crop.toLowerCase()}.`,
      severity: 'medium',
      action: 'Pause irrigation and monitor field moisture for 2 hours.',
    }
  }

  if (temperature > 34) {
    return {
      title: 'HIGH TEMPERATURE ALERT',
      message: 'Temperature is above the ideal range for the crop and may increase evapotranspiration.',
      severity: 'high',
      action: 'Increase monitoring and schedule evening irrigation if needed.',
    }
  }

  if (soilMoisture > 70) {
    return {
      title: 'EXCESS MOISTURE',
      message: 'Soil moisture is above the recommended threshold and may reduce root oxygenation.',
      severity: 'medium',
      action: 'Pause irrigation and review drainage conditions.',
    }
  }

  if (humidity > 80 && rainStatus === 'Rain') {
    return {
      title: 'WEATHER ALERT',
      message: 'High humidity and active rain conditions may increase fungal risk.',
      severity: 'medium',
      action: 'Check canopy health and avoid overwatering.',
    }
  }

  return {
    title: 'FIELD CONDITIONS NORMAL',
    message: `Current conditions are within the healthy range for ${crop.toLowerCase()} growth.`,
    severity: 'normal',
    action: 'Continue standard monitoring and crop care routines.',
  }
}
