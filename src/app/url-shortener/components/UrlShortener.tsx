'use client'

import { actions } from '@/actions'
import CopyButton from '@/components/CopyButton'
import { Display } from '@/components/Display'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useActionState, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export function UrlShortener() {
  const [url, setUrl] = useState('')
  const [formState, action, isPending] = useActionState(
    actions.urlShortenerActions.shorten,
    {
      errors: {},
    },
  )

  useEffect(() => {
    if (formState.errors.url) toast.error(formState.errors.url[0])
    if (formState.errors._form) toast.error(formState.errors._form)
  }, [formState.errors])

  return (
    <main className="space-y-4">
      <form action={action} className="space-y-4">
        <div className="flex flex-col gap-2">
          <Textarea
            placeholder="Cole a URL aqui"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Aguarde...' : 'Encurtar URL'}
        </Button>
      </form>

      {formState.data?.url && (
        <div className="bg-card border-input flex items-center gap-2 rounded-md border p-4 shadow-sm">
          <Display value={formState.data.url} />
          <CopyButton text={formState.data.url} />
        </div>
      )}
    </main>
  )
}
