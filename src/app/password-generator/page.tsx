import { Page } from '@/components/Page'
import { PasswordGenerator } from './components/PasswordGenerator'

export default async function PasswordGeneratorPage() {
  return (
    <Page title="Gerador de senha segura">
      <PasswordGenerator />
    </Page>
  )
}
