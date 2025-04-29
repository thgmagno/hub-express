'use server'

import { generateUniqueUrl } from '@/app/url-shortener/services/generateUniqueUrl'
import { UrlShortenerSchema } from '@/lib/schemas/UrlShortenerSchema'
import { UrlShortenerFormState } from '@/lib/states/UrlShortenerFormState'

export async function shorten(
  formState: UrlShortenerFormState,
  formData: FormData,
): Promise<UrlShortenerFormState> {
  const parsed = UrlShortenerSchema.safeParse({
    url: formData.get('url'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    return {
      errors: {},
      data: { url: await generateUniqueUrl(parsed.data.url) },
    }
  } catch {
    return {
      errors: {
        _form: 'Ocorreu um erro ao tentar encurtar a URL, tente novamente.',
      },
    }
  }
}
