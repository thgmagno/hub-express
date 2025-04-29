import { LinkIcon, FileCode, Lock, Text } from 'lucide-react'

export const Menu = [
  {
    title: 'Gerador de Senhas',
    url: '/password-generator',
    icon: Lock,
  },
  {
    title: 'Encurtador de URLs',
    url: '/url-shortener',
    icon: LinkIcon,
  },
  {
    title: 'Contador de Caracteres',
    url: '/character-counter',
    icon: Text,
  },
  {
    title: 'JSON para Typescript',
    url: '/json-to-typescript',
    icon: FileCode,
  },
]
