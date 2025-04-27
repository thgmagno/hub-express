import { PasswordGeneratorForm } from '@/components/form/PasswordGeneratorForm'
import { Page } from '@/components/Page'

export default async function PasswordGenerator() {
  return (
    <Page title="Gerador de senha segura">
      <PasswordGeneratorForm />
    </Page>
  )
}
