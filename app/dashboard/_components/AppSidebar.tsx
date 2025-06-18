"use client";
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
import { useUser, useAuth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
// import { useEffect } from "react";

const AppSidebar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useAuth();
  const userId = user?.id || null;
  // console.log(user)
  // useEffect(() => {
  //   if (!isSignedIn) {
  //     redirect("/");
  //   }
  // }, [isSignedIn]);
  return (
    <>
      <Sidebar className="px-2 bg-gray-100 dark:bg-black text-prima">
        <SidebarHeader className="flex-between flex-row m-[4px_0px_0px] bg-gray-100 dark:bg-black">
          <Link href={"/"}>
            <Image src={"/heart.svg"} alt="heart" width={40} height={40} />
          </Link>
          <SidebarTrigger className="!p-0" />
        </SidebarHeader>
        <SidebarContent className="overflow-hidden bg-gray-100 dark:bg-black text-prima">
          <SidebarGroup className="flex-center flex-col">
            <Image
              alt="Snowbrain"
              src={"/snow5-removebg-preview.png"}
              width={200}
              height={200}
            />
            <Link href={"/"} className="text-prima w-full">
              <Button
                variant={"outline"}
                className="w-full !bg-transparent border border-secon !text-prima mt-3 h-10 !rounded-lg font-medium text-sm hover:!bg-secon transition-colors"
              >
                <FilePen className="w-4 h-4" />
                <span>Job</span>
              </Button>
            </Link>
          </SidebarGroup>

          {userId && <JobSidebarList />}
        </SidebarContent>

        <SidebarFooter className="overflow-hidden bg-gray-100 dark:bg-black">
          <SidebarFooterContent
            isSignedIn={isSignedIn || false}
            isLoaded={isLoaded}
            userName={user?.fullName || "snowdev"}
            userEmail={user?.primaryEmailAddress?.emailAddress || "snowdev@gmail.com"}
            userInitial={user?.firstName?.charAt(0) || "S"}
            credits={20}
            loadingCredit={false}
            onUpgradeClick={() => console.log("")}
            onSignOut={() => signOut({
              redirectUrl: "/",
            })}
          />
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
