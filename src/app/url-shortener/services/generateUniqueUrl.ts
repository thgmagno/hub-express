import { redis } from '@/lib/redis'
import { customAlphabet } from 'nanoid'

const NanoId = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  4,
)

export async function generateUniqueUrl(originalUrl: string): Promise<string> {
  const existingId = await redis.get(`url:${originalUrl}`)

  if (existingId) {
    return `${process.env.BASE_URL}/api/url/${existingId}`
  }

  let id = ''
  let idAvailable = false

  while (!idAvailable) {
    id = NanoId()
    idAvailable = (await redis.get(`short:${id}`)) === null
  }

  await redis.set(`short:${id}`, originalUrl, { EX: 60 * 60 * 24 * 30 })
  await redis.set(`url:${originalUrl}`, id, { EX: 60 * 60 * 24 * 30 })

  return `${process.env.BASE_URL}/api/url/${id}`
}
