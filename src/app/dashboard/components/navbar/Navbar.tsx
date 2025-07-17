"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineDashboardCustomize, MdOutlinePayment } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const profileImages = [
  "/profileImage1.jpg",
  "/profileImage3.jpg",
  "/profileImage2.jpg",
  "/profileImage4.jpg",
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
      <div className="flex justify-between items-center h-[4rem] px-[3rem] pt-5">
        {/* Logo */}
        <Link href="/dashboard">
          <div className="flex items-center cursor-pointer">
            <p className="text-[1.5rem] font-[600] tracking-[0.1rem]">NH</p>
          </div>
        </Link>

        {/* Tabs */}
        <div className="flex items-center gap-3">
          {navItems.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              href={to}
              onClick={() => setActiveItem(label)}
              className={`flex items-center gap-1 w-[7.4rem] h-[2.2rem] rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
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
        <div className="flex items-center gap-3">
          {/* Profile images */}
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

          {/* Add Manager */}
          <Link
            href="/users"
            onClick={() => setActiveItem("user")}
            className={`flex items-center gap-1 w-[7.4rem] h-[2.2rem] rounded-[1.5rem] cursor-pointer ${
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
        <div className="flex items-center gap-3">
          {/* Notification */}
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

          {/* Messages */}
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

          {/* Account */}
          <Link
            href="/account"
            onClick={() => setActiveItem("account")}
            className="relative group w-fit"
          >
            <Image
              src="/profileImage5.jpg"
              width={35}
              height={35}
              alt="Account"
              className="rounded-full border border-white"
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
