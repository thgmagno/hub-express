import { Page } from '@/components/Page'
import { UrlShortener } from './components/UrlShortener'
import Link from 'next/link'

type UrlData = {
  short: string
  original: string
}

export default async function UrlShortenerPage() {
  const res = await fetch(`${process.env.API_GO_URL}/recently-shortened`, {
    cache: 'no-store',
  }).then((res) => res.json())

  const data: UrlData[] = res.urls.map((obj: string) => JSON.parse(obj))

  return (
    <Page title="Encurtador de URLs">
      <UrlShortener />

      <section className="mt-8">
        <h2 className="mb-2 text-lg font-semibold">
          URLs encurtadas recentemente:
        </h2>

        {data.length > 0 ? (
          <ul className="space-y-3">
            {data.map((url, index) => (
              <li
                key={index}
                className="bg-card flex flex-col rounded-md border p-2"
              >
                <Link
                  href={url.short}
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  {url.short}
                </Link>
                <span>{url.original}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span>Nenhum registro encontrado.</span>
        )}
      </section>
    </Page>
  )
}
