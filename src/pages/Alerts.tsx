import { PageContainer } from '../components/PageContainer'
import { AlertCard } from '../components/AlertCard'
import { mockAlerts } from '../data/mockAlerts'

function Alerts() {
  return (
    <PageContainer title="Alerts">
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </PageContainer>
  )
}

export default Alerts
