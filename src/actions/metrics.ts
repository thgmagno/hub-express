'use server'

import { redis } from '@/lib/redis'

export async function incrementMetric(key: string) {
  return redis.incr(key)
}

export async function getMetrics() {
  const keys = await redis.keys('*')

  const metrics = await Promise.all(
    keys.map(async (key) => {
      const value = await redis.get(key)
      return { [key]: Number(value) }
    }),
  )

  return Object.assign({}, ...metrics)
}
