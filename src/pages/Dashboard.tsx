import { motion } from '../lib/motion'
import { Activity, CloudRain, Droplets, Sparkles, Thermometer, Wand2 } from '../lib/icons'
import { useEffect, useMemo, useState } from 'react'
import { Header, SidebarDrawer } from '../components/Header'
import { SensorCard } from '../components/SensorCard'
import { CropCard } from '../components/CropCard'
import { FieldImageCard } from '../components/FieldImageCard'
import { RecommendationCard } from '../components/RecommendationCard'
import { BottomNavigation } from '../components/BottomNavigation'
import { getRecommendation } from '../utils/recommendationEngine'
import { defaultSensorData, defaultCropName } from '../data/mockSensorData'
import { generateSensorData, resetDemoSensorData } from '../utils/sensorSimulator'
import type { Recommendation, SensorData } from '../types'

const fallbackImage = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'

function Dashboard() {
  const [sensorData, setSensorData] = useState<SensorData>(defaultSensorData)
  const [cropName] = useState(defaultCropName)
  const [fieldImage, setFieldImage] = useState(fallbackImage)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<{ crop: string; health: string; diseaseRisk: string; confidence: number } | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('smart-farm-dashboard')
    if (!saved) return

    try {
      const parsed = JSON.parse(saved) as { sensorData?: SensorData; fieldImage?: string }
      if (parsed.sensorData) setSensorData(parsed.sensorData)
      if (parsed.fieldImage) setFieldImage(parsed.fieldImage)
    } catch {
      // Ignore parse errors in prototype mode.
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'smart-farm-dashboard',
      JSON.stringify({
        sensorData,
        fieldImage,
      }),
    )
  }, [sensorData, fieldImage])

  const recommendation = useMemo<Recommendation>(() => {
    return getRecommendation(sensorData.soilMoisture, sensorData.temperature, sensorData.humidity, sensorData.rainStatus, cropName)
  }, [cropName, sensorData])

  const handleSimulate = () => {
    setSensorData(generateSensorData())
  }

  const handleReset = () => {
    setSensorData(resetDemoSensorData())
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)

    setTimeout(() => {
      setAnalysisResult({
        crop: cropName,
        health: 'Healthy',
        diseaseRisk: 'Low',
        confidence: 94,
      })
      setIsAnalyzing(false)
    }, 1200)
  }

  const updateSensorValue = <K extends keyof SensorData>(key: K, value: SensorData[K]) => {
    setSensorData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SidebarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <div className="mx-auto max-w-[1200px] px-4 pb-28 pt-4 sm:px-6 lg:px-8">
        <Header status="Active" />

        <div className="mt-5 flex flex-col gap-4 lg:grid lg:grid-cols-[1.1fr_1.8fr_1.2fr]">
          <section className="space-y-4">
            <div className="mt-1 flex items-center justify-between gap-2">
              <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">Sensors</h2>
              <button
                type="button"
                onClick={handleSimulate}
                className="rounded-lg border border-green-500/40 bg-green-500/10 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-300 transition hover:bg-green-500/20"
              >
                Simulate Sensor Data
              </button>
            </div>

            <SensorCard icon="moisture" label="Soil Moisture" value={`${sensorData.soilMoisture}%`} status={sensorData.soilMoisture < 35 ? 'Low' : 'Stable'} />
            <SensorCard icon="temperature" label="Temperature" value={`${sensorData.temperature.toFixed(1)}°C`} />
            <SensorCard icon="humidity" label="Humidity" value={`${sensorData.humidity}%`} />
            <SensorCard icon="rain" label="Rain status" value={sensorData.rainStatus} />

            <div className="rounded-2xl border border-neutral-700 bg-[#303030] p-4">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">Manual controls</h3>
              <div className="space-y-4">
                <label className="block">
                  <div className="mb-1 flex items-center justify-between text-sm text-neutral-300"><span>Soil Moisture</span><span>{sensorData.soilMoisture}%</span></div>
                  <input type="range" min="0" max="100" value={sensorData.soilMoisture} onChange={(e) => updateSensorValue('soilMoisture', Number(e.target.value))} className="w-full accent-green-500" />
                </label>
                <label className="block">
                  <div className="mb-1 flex items-center justify-between text-sm text-neutral-300"><span>Temperature</span><span>{sensorData.temperature.toFixed(1)}°C</span></div>
                  <input type="range" min="10" max="45" step="0.1" value={sensorData.temperature} onChange={(e) => updateSensorValue('temperature', Number(e.target.value))} className="w-full accent-green-500" />
                </label>
                <label className="block">
                  <div className="mb-1 flex items-center justify-between text-sm text-neutral-300"><span>Humidity</span><span>{sensorData.humidity}%</span></div>
                  <input type="range" min="10" max="100" value={sensorData.humidity} onChange={(e) => updateSensorValue('humidity', Number(e.target.value))} className="w-full accent-green-500" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm text-neutral-300">Rain Status</span>
                  <select
                    value={sensorData.rainStatus}
                    onChange={(e) => updateSensorValue('rainStatus', e.target.value as SensorData['rainStatus'])}
                    className="w-full rounded-xl border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-white outline-none ring-0"
                  >
                    <option value="Rain">Rain</option>
                    <option value="No Rain">No Rain</option>
                  </select>
                </label>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <CropCard cropName={cropName} />
            <FieldImageCard imageSrc={fieldImage} onImageChange={setFieldImage} />

            {analysisResult ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-green-500/25 bg-green-500/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">Crop Analysis</p>
                  <Sparkles className="h-4 w-4 text-green-300" />
                </div>
                <div className="mt-3 space-y-2 text-sm text-neutral-200">
                  <p><span className="text-neutral-400">Crop:</span> {analysisResult.crop}</p>
                  <p><span className="text-neutral-400">Health:</span> {analysisResult.health}</p>
                  <p><span className="text-neutral-400">Disease Risk:</span> {analysisResult.diseaseRisk}</p>
                  <p><span className="text-neutral-400">Confidence:</span> {analysisResult.confidence}%</p>
                </div>
              </motion.div>
            ) : (
              <button
                type="button"
                onClick={handleAnalyze}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300 transition hover:bg-green-500/20"
              >
                {isAnalyzing ? <Activity className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                {isAnalyzing ? 'Analyzing crop...' : 'Analyze Crop'}
              </button>
            )}
          </section>

          <section className="space-y-4">
            <RecommendationCard recommendation={recommendation} />

            <div className="rounded-2xl border border-neutral-700 bg-[#303030] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Demo Mode</p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-neutral-600 bg-neutral-800 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-200 transition hover:border-neutral-500"
                >
                  Reset Demo
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <CloudRain className="h-4 w-4 text-green-300" />
                <span>Field conditions synchronized with AI engine.</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open panel menu"
        className="fixed left-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-white shadow-lg shadow-black/20 lg:hidden"
      >
        <Droplets className="h-5 w-5 text-green-300" />
      </button>

      <BottomNavigation />
    </div>
  )
}

export default Dashboard
