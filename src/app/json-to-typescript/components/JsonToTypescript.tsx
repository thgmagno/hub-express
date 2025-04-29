'use client'

import { useState } from 'react'
import { jsonToTypescript } from '../services/jsonToTypescriptService'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import CopyButton from '@/components/CopyButton'
import clsx from 'clsx'
import { Input } from '@/components/ui/input'

export function JsonToTypescript() {
  const [json, setJson] = useState('')
  const [ts, setTs] = useState('')
  const [interfaceName, setInterfaceName] = useState('')

  function handleConvert() {
    try {
      const result = jsonToTypescript(JSON.parse(json), {
        rootInterfaceName: interfaceName || 'Root',
      })
      setTs(result)
    } catch {
      setTs('JSON inválido')
    }
  }

  return (
    <main className="space-y-4">
      <Textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="Cole o JSON aqui"
        className="h-44 resize-none"
      />

      <div className="flex gap-2">
        <Input
          className="bg-card"
          placeholder="Nome da interface raiz (opcional)"
          value={interfaceName}
          onChange={(e) => setInterfaceName(e.target.value)}
        />
        <Button onClick={handleConvert}>Converter</Button>
      </div>

      {ts && (
        <div className="bg-card border-input flex items-start gap-2 rounded-md border p-4 shadow-sm">
          <pre
            className={clsx(
              'flex-1 rounded-md p-4 px-3 py-2 text-sm shadow-xs',
              { 'text-amber-500': ts === 'JSON inválido' },
            )}
          >
            {ts}
          </pre>
          {ts !== 'JSON inválido' && <CopyButton text={ts} />}
        </div>
      )}
    </main>
  )
}
