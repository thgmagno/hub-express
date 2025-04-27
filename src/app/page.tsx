import { actions } from '@/actions'
import { Page } from '@/components/Page'

export default async function Home() {
  const metrics = await actions.metrics.getMetrics()

  return (
    <Page title="HubExpress">
      <div className="rounded-md bg-zinc-900 p-4">
        <h2>Total de geradas: {metrics['password-generator']}</h2>
      </div>
    </Page>
  )
}
