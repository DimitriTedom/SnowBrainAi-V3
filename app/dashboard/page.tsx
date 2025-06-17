"use client";
import ThemeTrigger from "@/components/ThemeTrigger";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
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
        </div>
        <ThemeTrigger />
      </div>
      <div className="w-full flex-col flex-center gap-[3rem]">
        <div className="flex flex-col flex-start text-2xl font-bold xl:text-[3rem] space-y-4">
          <div className="flex-center">
          <h1>Hey,this is{" "}</h1>
          <Link href={"/"} className="text-xl pl-2">
            <div className="text-2xl xl:text-[3rem] gradient_text flex items-center font-bold">
              <div className="flex leading-[3rem]">
                <h1 className="">SnowBrain Ai</h1> <h6 className="text-xs xl:text-sm">v3</h6> 👋️
              </div>
            </div>
          </Link>
          </div>
          <h1>How can i Help You ?</h1>
        </div>
        <JobInfoForm />
      </div>
    </div>
  );
};

export default DashBoard;
