import { Page } from '@/components/Page'
import { JsonToTypescript } from './components/JsonToTypescript'

export default async function JsonToTypescriptPage() {
  return (
    <Page title="Converter JSON para Typescript">
      <JsonToTypescript />
    </Page>
  )
}
