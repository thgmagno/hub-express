import { z } from 'zod'

export const UrlShortenerSchema = z.object({
  url: z
    .string()
    .min(1, { message: 'URL é obrigatória' })
    .url({ message: 'URL inválida' }),
})
