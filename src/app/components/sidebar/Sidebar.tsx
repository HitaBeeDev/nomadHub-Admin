"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineDashboardCustomize, MdOutlinePayment } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import profileImage1 from "/public/profileImage1.jpg";
import profileImage2 from "/public/profileImage2.jpg";
import profileImage3 from "/public/profileImage3.jpg";
import profileImage4 from "/public/profileImage4.jpg";
import profileImage5 from "/public/profileImage5.jpg";

type Props = {
  activeItem: string;
  setActiveItem: (value: string) => void;
};

const profileImages = [
  profileImage1,
  profileImage3,
  profileImage2,
  profileImage4,
];

export default function Navbar({ activeItem, setActiveItem }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Dashboard", to: "/dashboard", icon: MdOutlineDashboardCustomize },
    { name: "Payments", to: "/payments", icon: MdOutlinePayment },
    { name: "Reports", to: "/reports", icon: TbReport },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-[#efefef]" : "bg-[#efefef]"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-[4rem] px-[3rem] pt-5">
        <div className="flex flex-row justify-center items-center gap-8">
          <Link href="/dashboard">
            <div className="flex items-center cursor-pointer">
              <p className="text-[1.5rem] font-[600] tracking-[0.1rem]">NH</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                href={tab.to}
                key={tab.name}
                onClick={() => setActiveItem(tab.name)}
                className={`flex flex-row justify-center items-center gap-1 w-[7.4rem] h-[2.2rem] rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
                  activeItem === tab.name
                    ? "bg-black text-white"
                    : "bg-[#dcdcdc]/50 text-black"
                }`}
              >
                <Icon className="text-[0.9rem]" />
                <p className="text-[0.75rem]">{tab.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-row justify-center items-center">
            <div className="flex">
              {profileImages.map((src, index) => (
                <img
                  key={index}
                  src={src.src}
                  className="w-10 rounded-full border border-white -ml-2 first:ml-0"
                  alt={`Profile ${index + 1}`}
                />
              ))}
              <p className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium -ml-2">
                +6
              </p>
            </div>
          </div>

          <Link
            href="/users"
            onClick={() => setActiveItem("user")}
            className={`flex flex-row justify-center items-center gap-1 w-[7.4rem] h-[2.2rem] rounded-[1.5rem] cursor-pointer ${
              activeItem === "user"
                ? "bg-black text-white"
                : "bg-[#dcdcdc]/50 text-black"
            }`}
          >
            <LuPlus className="text-[0.9rem]" />
            <p className="text-[0.75rem]">Add manager</p>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <Link
            href="/notifications"
            onClick={() => setActiveItem("notifications")}
            className="relative group w-fit"
          >
            <div
              className={`w-[2.2rem] h-[2.2rem] rounded-full flex justify-center items-center cursor-pointer transition ${
                activeItem === "notifications"
                  ? "bg-black text-white"
                  : "bg-[#dcdcdc]/50 text-black"
              }`}
            >
              <IoIosNotificationsOutline />
            </div>
            <div className="absolute right-[1rem] -top-[1.2rem] bg-white/50 w-[6rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl opacity-0 group-hover:opacity-100 transition">
              <p className="text-[0.75rem]">Notifications</p>
            </div>
          </Link>

          <Link
            href="/messages"
            onClick={() => setActiveItem("messages")}
            className="relative group w-fit"
          >
            <div
              className={`w-[2.2rem] h-[2.2rem] rounded-full flex justify-center items-center cursor-pointer transition ${
                activeItem === "messages"
                  ? "bg-black text-white"
                  : "bg-[#dcdcdc]/50 text-black"
              }`}
            >
              <CiMail />
            </div>
            <div className="absolute right-[1rem] -top-[1.2rem] bg-white/50 w-[6rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl opacity-0 group-hover:opacity-100 transition">
              <p className="text-[0.75rem]">Messages</p>
            </div>
          </Link>

          <Link
            href="/account"
            onClick={() => setActiveItem("account")}
            className="relative group w-fit"
          >
            <img
              src={profileImage5.src}
              className="w-[2.2rem] rounded-full border border-white"
              alt="Account"
            />
            <div className="absolute right-[1rem] -top-[1.2rem] bg-white/50 w-[5rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl opacity-0 group-hover:opacity-100 transition">
              <p className="text-[0.75rem]">Account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
