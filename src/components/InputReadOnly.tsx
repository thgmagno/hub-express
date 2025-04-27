'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

interface Props {
  value: string
}

export function InputReadOnly({ value }: Props) {
  const [copied, setCopied] = useState(false)

  async function copyToClipboard() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <Input type="text" value={value} readOnly className="border-dashed" />
      <Button
        type="button"
        onClick={copyToClipboard}
        variant="outline"
        size="icon"
        disabled={!value}
      >
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  )
}
