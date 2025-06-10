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
      <SidebarGroupLabel>Job List
        <SidebarGroupLabel className="text-white/80 mt-0">
          <SidebarMenu className="min-h-[350px] max-h-[350px] overflow-y-auto mb-2 scrollbar">
            <SidebarMenuItem>
              <SidebarMenuButton className={cn(`*:!bg-transparent !text-white hover:!bg-gray-700 transition-colors `, pathname == "" && "!bg-gray-700")} asChild>
                <Link href="#" className="text-white">
                  <MessageSquareTextIcon className="w-4 h-4"/>
                  <span>Software Developer</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupLabel>
      </SidebarGroupLabel>
    </SidebarGroup>
  )
}

export default JobSidebarList