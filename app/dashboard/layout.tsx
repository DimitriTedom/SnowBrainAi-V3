import AppSidebar from "@/app/dashboard/_components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

const DashBoardLayout = async ({children}:{children:ReactNode}) => {
  return (
    <>
    <SidebarProvider className="h-[(min(100dvh,100vh))] w-[100vw]" style={{"--sidebar-width":"280px",} as React.CSSProperties}>
      <AppSidebar />
      <main className="w-full flex-1">
        {children}
      </main>
    </SidebarProvider>
    </>
  )
}

export default DashBoardLayout