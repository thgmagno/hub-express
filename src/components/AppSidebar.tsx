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
import { Menu } from '@/lib/menu'
import { Home } from 'lucide-react'

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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button onClick={() => handleClick('/')}>
                    <Home />
                    <span>Início</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {Menu.sort((a, b) => a.title.localeCompare(b.title)).map(
                (option) => (
                  <SidebarMenuItem key={option.title}>
                    <SidebarMenuButton asChild>
                      <button onClick={() => handleClick(option.url)}>
                        <option.icon />
                        <span>{option.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
