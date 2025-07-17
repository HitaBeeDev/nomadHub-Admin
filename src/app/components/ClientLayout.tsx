"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="bg-[#efefef] min-h-screen w-full font-['Raleway',_sans-serif]">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="flex">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        <main className="pl-[5rem] pt-[4rem] pr-[3rem] w-full">{children}</main>
      </div>
    </div>
  );
}
