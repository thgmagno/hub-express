import { redis } from '@/lib/redis'

export async function GET(req: Request) {
  const id = req.url.split('/').pop()

  if (!id) {
    return Response.json({
      status: 'erro',
      message: 'Parâmetros inválidos.',
      details: 'Certifique-se de fornecer um identificador válido na URL.',
    })
  }

  const originalUrl = await redis.get(`short:${id}`)

  if (!originalUrl) {
    return Response.json({
      status: 'erro',
      message: 'URL não encontrada.',
      details:
        'Este projeto é parte de um portfólio pessoal e não possui fins comerciais. As URLs expiram em 30 dias. Caso a URL tenha expirado, gere uma nova.',
    })
  }

  return Response.redirect(originalUrl)
}
