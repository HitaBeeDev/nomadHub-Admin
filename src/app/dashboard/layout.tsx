"use client";

import { useState } from "react";
import { ReactNode } from "react";
import Navbar from "@/app/dashboard/components/navbar/Navbar";
import Sidebar from "@/app/dashboard/components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="bg-[#efefef] min-h-screen w-full font-['Raleway',_sans-serif]">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="pl-[5rem] pt-[4rem] pr-[3rem] w-full">{children}</div>
      </div>
    </div>
  );
}
