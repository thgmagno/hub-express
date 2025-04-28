import { Home, LinkIcon, FileCode, Lock, Text } from 'lucide-react'

export const hubOptions = [
  {
    title: 'Início',
    url: '/',
    icon: Home,
  },
  {
    title: 'Gerador de Senha',
    url: '/password-generator',
    icon: Lock,
  },
  {
    title: 'Encurtador de URLs',
    url: '/shortener',
    icon: LinkIcon,
  },
  {
    title: 'Contador de Caracteres',
    url: '/counter',
    icon: Text,
  },
  {
    title: 'JSON <> Typescript',
    url: '/converter',
    icon: FileCode,
  },
]
