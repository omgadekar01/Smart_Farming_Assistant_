import { useEffect, useState } from 'react'
import { Bell, Check, Moon, Shield, Sun, Waves } from '../lib/icons'
import { PageContainer } from '../components/PageContainer'
import { defaultSettings } from '../data/mockSensorData'
import type { SettingsState } from '../types'

const STORAGE_KEY = 'smart-farm-settings'

function Settings() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY)
    if (!savedSettings) return

    try {
      const parsed = JSON.parse(savedSettings) as SettingsState
      setSettings(parsed)
    } catch {
      // Ignore invalid saved settings.
    }
  }, [])

  const updateSetting = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 1800)
  }

  return (
    <PageContainer title="Settings">
      <div className="space-y-6">
        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-400">Farm Information</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Farm Name</span>
              <input value={settings.farmName} onChange={(e) => updateSetting('farmName', e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Location</span>
              <input value={settings.location} onChange={(e) => updateSetting('location', e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Crop</span>
              <input value={settings.crop} onChange={(e) => updateSetting('crop', e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Farm Size</span>
              <input value={settings.farmSize} onChange={(e) => updateSetting('farmSize', e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-400">Sensor Settings</h3>
          <div className="grid gap-3 md:grid-cols-3">
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Moisture threshold</span>
              <input type="number" value={settings.moistureThreshold} onChange={(e) => updateSetting('moistureThreshold', Number(e.target.value))} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Temperature threshold</span>
              <input type="number" value={settings.temperatureThreshold} onChange={(e) => updateSetting('temperatureThreshold', Number(e.target.value))} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
            <label className="block text-sm text-neutral-300">
              <span className="mb-1 block">Humidity threshold</span>
              <input type="number" value={settings.humidityThreshold} onChange={(e) => updateSetting('humidityThreshold', Number(e.target.value))} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none" />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-400">Notification Settings</h3>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ['Irrigation alerts', 'irrigationAlerts', Bell],
              ['Disease alerts', 'diseaseAlerts', Shield],
              ['Weather alerts', 'weatherAlerts', Waves],
            ].map(([label, key, Icon]) => (
              <button
                key={key}
                type="button"
                onClick={() => updateSetting(key as keyof SettingsState, !settings[key as keyof SettingsState] as never)}
                className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm ${settings[key as keyof SettingsState] ? 'border-green-500/30 bg-green-500/10 text-green-200' : 'border-neutral-700 bg-neutral-900 text-neutral-300'}`}
              >
                <span className="flex items-center gap-2"><Icon className="h-4 w-4" />{label}</span>
                <span className={`flex h-6 w-11 items-center rounded-full p-1 ${settings[key as keyof SettingsState] ? 'bg-green-500' : 'bg-neutral-700'}`}>
                  <span className={`h-4 w-4 rounded-full bg-white transition ${settings[key as keyof SettingsState] ? 'translate-x-5' : 'translate-x-0'}`} />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-400">Application Settings</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <button
              type="button"
              onClick={() => updateSetting('darkMode', !settings.darkMode)}
              className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm ${settings.darkMode ? 'border-green-500/30 bg-green-500/10 text-green-200' : 'border-neutral-700 bg-neutral-900 text-neutral-300'}`}
            >
              <span className="flex items-center gap-2"><Moon className="h-4 w-4" />Dark mode</span>
              <Sun className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => updateSetting('notifications', !settings.notifications)}
              className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm ${settings.notifications ? 'border-green-500/30 bg-green-500/10 text-green-200' : 'border-neutral-700 bg-neutral-900 text-neutral-300'}`}
            >
              <span className="flex items-center gap-2"><Bell className="h-4 w-4" />Notifications</span>
              <span className="text-xs uppercase tracking-[0.2em]">{settings.notifications ? 'On' : 'Off'}</span>
            </button>
          </div>
        </section>

        <div className="flex items-center justify-between gap-3 border-t border-neutral-700 pt-4">
          <div className="flex items-center gap-2 text-sm text-green-300">
            {saved ? <Check className="h-4 w-4" /> : null}
            {saved ? 'Settings saved' : 'Ready to sync'}
          </div>
          <button type="button" onClick={handleSave} className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400">Save settings</button>
        </div>
      </div>
    </PageContainer>
  )
}

export default Settings
