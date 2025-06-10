'use client'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { MessageSquareTextIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const JobSidebarList = () => {
   const pathname = usePathname();
  return (
    <SidebarGroup>
        <SidebarGroupLabel className="text-white/80 mt-0">
        Job List
        </SidebarGroupLabel>
          <SidebarMenu className="min-h-[350px] max-h-[350px] overflow-y-auto pb-2 scrollbar">
            <SidebarMenuItem>
              <SidebarMenuButton className={cn(`!bg-transparent !text-white hover:!bg-gray-700 transition-colors `, pathname == "" && "!bg-gray-700")} asChild>
                <Link href="#" className="text-white">
                  <MessageSquareTextIcon className="w-4 h-4"/>
                  <span>Software Developer</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
    </SidebarGroup>
  )
}

export default JobSidebarList