import { CharactersCounter } from '@/components/CharactersCounter'
import { Page } from '@/components/Page'

export default async function Counter() {
  return (
    <Page title="Contador de Caracteres">
      <CharactersCounter />
    </Page>
  )
}
