import { Page } from '@/components/Page'
import { Button } from '@/components/ui/button'
import { ArrowLeftRight } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  return (
    <Page title="HubExpress">
      <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
        <h1 className="text-4xl font-bold">Bem-vindo ao HubExpress!</h1>
        <p className="text-muted-foreground">
          Uma plataforma ágil para conectar ferramentas, e acelerar tarefas.
        </p>

        <div className="flex flex-col gap-6 xl:flex-row">
          <Button asChild>
            <Link href="/password-generator">Gerador de senha</Link>
          </Button>
          <Button asChild>
            <Link href="/shortener">Encurtador de URLs</Link>
          </Button>
          <Button asChild>
            <Link href="/counter">Contador de Caracteres</Link>
          </Button>
          <Button asChild>
            <Link href="/converter">
              Converter JSON <ArrowLeftRight /> Typescript
            </Link>
          </Button>
        </div>
      </div>
    </Page>
  )
}
