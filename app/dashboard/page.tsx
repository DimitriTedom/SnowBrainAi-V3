"use client";
import ThemeTrigger from "@/components/ThemeTrigger";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import JobInfoForm from "./_components/JobInfoForm";

const DashBoard = () => {
  const { open, isMobile } = useSidebar();
  return (
    <div className="w-full relative flex-1 min-h-screen bg-white dark:bg-black flex items-center flex-col px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-center justify-between pt-4">
        <div className="flex items-center">
          {(!open || isMobile) && <SidebarTrigger />}
          <Link href={"/"} className="text-xl pl-2">
            <div className="text-xl xl:text-2xl gradient_text flex items-center font-bold">
              <Image src={"/heart.svg"} alt="heart" width={40} height={40} />
              <div className="flex">
                SnowBrain Ai <h6 className="text-xs">v3</h6>
              </div>
            </div>
          </Link>
        </div>
        <ThemeTrigger />
      </div>
      <JobInfoForm/>
    </div>
  );
};

export default DashBoard;
