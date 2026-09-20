import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../lib/charts'
import { PageContainer } from '../components/PageContainer'
import { ChartCard } from '../components/ChartCard'
import { historyData } from '../data/mockSensorData'

function History() {
  return (
    <PageContainer title="History">
      <div className="space-y-6">
        <ChartCard title="Soil Moisture">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historyData}>
              <defs>
                <linearGradient id="soilFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3a3a3a" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip />
              <Area type="monotone" dataKey="soilMoisture" stroke="#4ade80" fill="url(#soilFill)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Temperature">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historyData}>
              <defs>
                <linearGradient id="tempFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3a3a3a" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip />
              <Area type="monotone" dataKey="temperature" stroke="#fbbf24" fill="url(#tempFill)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Humidity">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historyData}>
              <defs>
                <linearGradient id="humidityFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3a3a3a" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip />
              <Area type="monotone" dataKey="humidity" stroke="#60a5fa" fill="url(#humidityFill)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </PageContainer>
  )
}

export default History
