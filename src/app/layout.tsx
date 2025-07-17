"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import Providers from "@/providers/Providers";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Your App",
  description: "Your description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="bg-[#efefef] min-h-screen w-full font-['Raleway',_sans-serif]">
            <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
            <div className="">
              <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
              <div className="pl-[3rem] pr-[3rem]">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
