import { DevelopmentAlert } from '@/components/DevelopmentAlert'
import { Page } from '@/components/Page'

export default async function JsonToTypescriptPage() {
  return (
    <Page title="Converter JSON <> Typescript">
      <DevelopmentAlert />
    </Page>
  )
}
