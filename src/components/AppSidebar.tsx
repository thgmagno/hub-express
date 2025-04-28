'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Home, Lock, Link, FileCode, Text } from 'lucide-react'

const items = [
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
    icon: Link,
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

export function AppSidebar() {
  const { open, setOpen, isMobile } = useSidebar()

  const handleClick = (href: string) => {
    setOpen(isMobile ? false : open)
    window.location.href = href
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>HubExpress</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button onClick={() => handleClick(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
