"use client";

import { ReactNode, useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="bg-[#efefef] min-h-screen w-full font-['Raleway',_sans-serif]">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="pl-[3rem] pr-[3rem]">{children}</div>
      </div>
    </div>
  );
}
