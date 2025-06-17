'use client'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { MessageSquareTextIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const JobSidebarList = () => {
   const pathname = usePathname();
  return (
    <SidebarGroup className="text-prima">
        <SidebarGroupLabel className="mt-0">
        Job List
        </SidebarGroupLabel>
          <SidebarMenu className="min-h-[350px] max-h-[350px] overflow-y-auto pb-2 scrollbar">
            <SidebarMenuItem>
              <SidebarMenuButton className={cn(`!bg-transparent hover:!bg-tertiar transition-colors `, pathname == "" && "!bg-tertiar")} asChild>
                <Link href="#" className="">
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