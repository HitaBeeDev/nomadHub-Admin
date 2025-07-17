"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineDashboardCustomize, MdOutlinePayment } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import ProfileImage1 from "../../../../public/profiles/profileImage1.jpg";
import ProfileImage2 from "../../../../public/profiles/profileImage2.jpg";
import ProfileImage3 from "../../../../public/profiles/profileImage3.jpg";
import ProfileImage4 from "../../../../public/profiles/profileImage4.jpg";
import ProfileImage5 from "../../../../public/profiles/profileImage5.jpg";

const profileImages = [
  ProfileImage1,
  ProfileImage2,
  ProfileImage3,
  ProfileImage4,
  ProfileImage5,
];

type Props = {
  activeItem: string;
  setActiveItem: (value: string) => void;
};

type IconItem = {
  icon: React.ElementType;
  label: string;
  to: string;
};

const navItems: IconItem[] = [
  { icon: MdOutlineDashboardCustomize, label: "Dashboard", to: "/dashboard" },
  { icon: MdOutlinePayment, label: "Payments", to: "/payments" },
  { icon: TbReport, label: "Reports", to: "/reports" },
];

export default function Navbar({ activeItem, setActiveItem }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-[#efefef]" : "bg-[#efefef]"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-[4rem] px-[3rem] pt-5">
        {/* Logo */}
        <div className="flex flex-row justify-center items-center gap-8">
          <Link href="/dashboard">
            <div className="flex items-center gap-1">
              <p className="text-[1.2rem] font-[400] tracking-[0.1rem]">N</p>

              <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-red-400 font-[500]"></div>

              <p className="text-[1.2rem] font-[400] tracking-[0.1rem]">H</p>
            </div>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-row justify-center items-center gap-3">
          {navItems.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              href={to}
              onClick={() => setActiveItem(label)}
              className={`flex flex-row items-center justify-center gap-1 w-[7.4rem] h-[2.2rem] rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
                activeItem === label
                  ? "bg-black text-white"
                  : "bg-[#dcdcdc]/50 text-black"
              }`}
            >
              <Icon className="text-[0.9rem]" />

              <p className="text-[0.75rem]">{label}</p>
            </Link>
          ))}
        </div>

        {/* Right: Avatars + Add Manager */}
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-row justify-center items-center">
            <div className="flex">
              {profileImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Profile ${index + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border border-white -ml-2 first:ml-0"
                />
              ))}

              <p className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium -ml-2">
                +6
              </p>
            </div>
          </div>

          <Link
            onClick={() => setActiveItem("user")}
            href="/users"
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

        {/* Notification / Messages / Account */}
        <div className="flex flex-row justify-center items-center gap-3">
          <Link
            href="/notifications"
            className="relative group w-fit"
            onClick={() => setActiveItem("notifications")}
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
            className="relative group w-fit"
            onClick={() => setActiveItem("messages")}
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

          <div
            onClick={() => setActiveItem("account")}
            className="relative group w-fit"
          >
            <Link href="/account" className="cursor-pointer">
              <Image
                src={ProfileImage5}
                width={35}
                height={35}
                alt="Account"
                className="rounded-full border border-white"
              />
            </Link>

            <div className="absolute right-[1rem] -top-[1.2rem] bg-white/50 w-[5rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl opacity-0 group-hover:opacity-100 transition">
              <p className="text-[0.75rem]">Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
