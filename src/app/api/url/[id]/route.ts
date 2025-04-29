import { redis } from '@/lib/redis'

export async function GET(req: Request) {
  const id = req.url.split('/').pop()
  if (!id) {
    return Response.json({
      error: true,
      message: 'Invalid parameters',
    })
  }

  const originalUrl = await redis.get(`short:${id}`)
  if (!originalUrl) {
    return Response.json({
      error: true,
      message: 'URL not found',
    })
  }

  return Response.redirect(originalUrl)
}
