import { Page } from '@/components/Page'
import { Button } from '@/components/ui/button'
import { Menu } from '@/lib/menu'
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
          {Menu.sort((a, b) => a.title.localeCompare(b.title)).map((i) => (
            <Button asChild key={i.url}>
              <Link href={i.url}>{i.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </Page>
  )
}
