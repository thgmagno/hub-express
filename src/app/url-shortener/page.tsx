import { Page } from '@/components/Page'
import { UrlShortener } from './components/UrlShortener'

export default async function UrlShortenerPage() {
  return (
    <Page title="Encurtador de URLs">
      <UrlShortener />
    </Page>
  )
}
