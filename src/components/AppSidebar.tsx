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
import { hubOptions } from '@/lib/hubOptions'

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
              {hubOptions.map((option) => (
                <SidebarMenuItem key={option.title}>
                  <SidebarMenuButton asChild>
                    <button onClick={() => handleClick(option.url)}>
                      <option.icon />
                      <span>{option.title}</span>
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
