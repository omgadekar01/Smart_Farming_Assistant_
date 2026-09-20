import { BrowserRouter, Navigate, Route, Routes } from './lib/router'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Alerts from './pages/Alerts'
import Settings from './pages/Settings'
import { BottomNavigation } from './components/BottomNavigation'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <BottomNavigation />
    </BrowserRouter>
  )
}

export default App
