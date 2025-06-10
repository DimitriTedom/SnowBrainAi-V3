"use client"
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "../../../components/ui/sidebar";
import { Button } from "../../../components/ui/button";
import { FilePen } from "lucide-react";
import JobSidebarList from "./JobSidebarList";
import SidebarFooterContent from "./SidebarFooterContent";
import Image from "next/image";

const AppSidebar = () => {
  return (
    <>
      <Sidebar className="!bg-[rgb(33,33,33)] px-2">
        <SidebarHeader className="flex-between flex-row m-[4px_0px_0px]">
          <Link href={"/"} className="text-white text-xl">
            <Image src={"/heart.svg"} alt="heart" width={40} height={40}/>
          </Link>
          <SidebarTrigger className="!text-white !p-0" />
        </SidebarHeader>
        <SidebarContent className="overflow-hidden">
          <SidebarGroup>
            <Link href={"/"}>
              <Button
                variant={"outline"}
                className="w-full !bg-transparent !text-white border border-[rgba(243,241,241,0.2)] mt-3 h-10 !rounded-lg font-medium text-sm hover:!bg-gray-700 transition-colors"
              >
                <FilePen className="w-4 h-4" />
                <span>Job</span>
              </Button>
            </Link>
          </SidebarGroup>

          <JobSidebarList />

        </SidebarContent>

        <SidebarFooter>

          <SidebarFooterContent
            isSignedIn={true}
            isLoaded={true}
            userName={"SnowDev"}
            userEmail={"snowdev@snowdev.com"}
            userInitial={"S"}
            credits={20}
            loadingCredit={false}
            onUpgradeClick={() => console.log("")}
            onSignOut={() => console.log("")}
          />
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
