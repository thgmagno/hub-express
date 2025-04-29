'use client'

import { useState } from 'react'
import { useClipboard } from '@/hooks/useClipboard.ts'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function CopyButton({ text }: { text: string }) {
  const { copy } = useClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    copy(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      onClick={handleCopy}
      size="icon"
      className="cursor-pointer"
      disabled={copied}
    >
      <Copy />
    </Button>
  )
}
