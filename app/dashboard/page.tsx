"use client";
import ThemeTrigger from "@/components/ThemeTrigger";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import React from "react";

const DashBoard = () => {
  const { open, isMobile } = useSidebar();
  return (
    <div className="w-full relative flex-1 min-h-screen flex items-center flex-col px-4 sm:px-6 lg:px-8">
      {/* <div className="absolute left-5 top-5">
      </div> */}
      {/* <div className='space-y-3 w-full max-w-7xl mx-auto bg-red-500'>
      <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-[#070d1b] tracking-[-0.8px]">
      AI Job Insight
      <span className='relative inline-block pl-3 sm:pl-5'>
      <div className="absolute -right-2 top-0 w-[160px] md:w-[220px] lg:w-[270px] h-10 sm:h-14 lg:h-16 bg-primary rotate-2 rounded-lg z-10">
      <span className='relative text-white'>Asistant</span>
      </div>
      </span>
      </h1>
      
      </div>
      </div> */}
      <div className="w-full flex items-center justify-between">
        <div className="flex ">
      {(!open || isMobile) && <SidebarTrigger />}
          <h1 className=" text-2xl font-bold text-prima gradient_text">SnowBrain v3</h1>
        </div>
        <ThemeTrigger/>
      </div>
    </div>
  );
};

export default DashBoard;
