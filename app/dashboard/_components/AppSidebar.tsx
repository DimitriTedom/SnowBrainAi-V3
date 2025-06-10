import Link from "next/link"
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "../../../components/ui/sidebar"
import { Button } from "../../../components/ui/button"
import { PlusIcon } from "lucide-react"
import JobSidebarList from "./JobSidebarList"

const AppSidebar = () => {
  return (
    <>
        <Sidebar className="!bg-[rgb(33,33,33)] px-2">
            <SidebarHeader className="flex-between flex-row m-[4px_0px_0px]">
                <Link href={"/"} className="text-white text-xl">
                    Job <b className="text-tertiar">Assistant</b>
                </Link>
                <SidebarTrigger className="!text-white !p-0"/>
            </SidebarHeader>
                <SidebarContent>
                    <Link  href={"/"}>
                    <Button variant={"ghost"} className="w-full !bg-transparent !text-white border border-[rgba(243,241,241,0.2)] mt-3 h-10 !rounded-lg font-medium text-sm hover:!bg-gray-700 transition-colors">
                        <PlusIcon className="w-4 h-4"/>
                        <span>Job</span>
                    </Button>
                    </Link>
                    <JobSidebarList />
                </SidebarContent>
        </Sidebar>
    </>
  )
}

export default AppSidebar