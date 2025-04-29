'use client'

import toast from 'react-hot-toast'

export function useClipboard() {
  function copy(text: string) {
    navigator.clipboard.writeText(text)
    toast.success('Copiado para a área de transferência')
  }

  return { copy }
}
