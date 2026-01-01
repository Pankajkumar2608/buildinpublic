import { Calendar, ChevronUp, Home, Inbox, LogOutIcon, Search, Settings, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Post",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Stats",
    url: "#",
    icon: Calendar,
  },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
  {
    title: "Profile",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl mt-2">
            <img
              src="/image.png"
              alt="logo"
              width={28}
              height={28}
              className="mr-2"
            />
            BuildInPublic
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-24 w-24" />
                      <span className="font-semibold">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
                <SidebarMenuButton>
                  <User2 className="h-5 w-5" /> Username
                   <LogOutIcon className="ml-auto h-5 w-5" /> 
                </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
