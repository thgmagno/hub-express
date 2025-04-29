import { Page } from '@/components/Page'
import { CharactersCounter } from './components/CharactersCounter'

export default async function CharactersCounterPage() {
  return (
    <Page title="Contador de Caracteres">
      <CharactersCounter />
    </Page>
  )
}
