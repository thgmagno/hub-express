'use client'

import { Home, Lock } from 'lucide-react'

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

const items = [
  {
    title: 'Início',
    url: '/',
    icon: Home,
  },
  {
    title: 'Gerador de senha',
    url: '/password-generator',
    icon: Lock,
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
