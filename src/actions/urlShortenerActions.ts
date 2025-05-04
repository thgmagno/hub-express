'use server'

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
    const res = await fetch(`${process.env.API_GO_URL}/shorten-url`, {
      method: 'POST',
      body: JSON.stringify({ url: parsed.data.url }),
    }).then((res) => res.json())

    return {
      errors: {},
      data: { url: res.url },
    }
  } catch {
    return {
      errors: {
        _form: 'Ocorreu um erro ao tentar encurtar a URL, tente novamente.',
      },
    }
  }
}
