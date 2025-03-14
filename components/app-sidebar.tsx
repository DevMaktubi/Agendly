"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Breno Luiz",
    email: "brenoluiz.dev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "BLPO Tecnologia",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Agendamentos",
      url: "/home/agendamentos",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Meus agendamentos",
          url: "/home/agendamentos/meus-agendamentos",
        },
        {
          title: "Agendar um serviço",
          url: "/home/agendamentos/agendar",
        },
        {
          title: "Análise dos agendamentos",
          url: "/home/agendamentos/analise-dos-agendamentos",
        },
      ],
    },
    {
      title: "Configurações",
      url: "/home/configuracoes",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "/home/configuracoes/geral",
        },
        {
          title: "Equipe",
          url: "/home/configuracoes/equipe",
        },
        {
          title: "Pagamentos",
          url: "/home/configuracoes/pagamentos",
        },
        {
          title: "Limites",
          url: "/home/configuracoes/limites",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
