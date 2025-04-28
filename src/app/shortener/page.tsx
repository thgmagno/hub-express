import { DevelopmentAlert } from '@/components/DevelopmentAlert'
import { Page } from '@/components/Page'

export default async function Shortener() {
  return (
    <Page title="Encurtador de URLs">
      <DevelopmentAlert />
    </Page>
  )
}
