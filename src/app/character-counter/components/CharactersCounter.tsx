'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

export function CharactersCounter() {
  const [text, setText] = useState('')

  const caracteres = text.length
  const palavras = text.trim() ? text.trim().split(/\s+/).length : 0

  return (
    <>
      <Textarea
        placeholder="Digite algo ou cole um texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4 text-sm text-gray-300 sm:text-base">
        <p>
          Caracteres: <span className="font-bold">{caracteres}</span>
        </p>
        <p>
          Palavras: <span className="font-bold">{palavras}</span>
        </p>
      </div>
    </>
  )
}
