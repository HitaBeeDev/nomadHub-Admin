"use client";

import { useState } from "react";
import Link from "next/link";
import { CiCalendar, CiHome, CiSettings, CiUser } from "react-icons/ci";
import { PiHeadset } from "react-icons/pi";
import { SiAwselasticloadbalancing } from "react-icons/si";

type Props = {
  activeItem: string;
  setActiveItem: (value: string) => void;
};

type IconItem = {
  icon: React.ElementType;
  label: string;
  to: string;
};

const icons: IconItem[] = [
  { icon: CiHome, label: "Home", to: "/dashboard" },
  { icon: CiCalendar, label: "Bookings", to: "/bookings" },
  { icon: SiAwselasticloadbalancing, label: "Hubs", to: "/HubsList" },
  { icon: CiUser, label: "Users", to: "/users" },
  { icon: CiSettings, label: "Settings", to: "/settings" },
];

const bottomIcon: IconItem = {
  icon: PiHeadset,
  label: "Customer Support",
  to: "/customer-support",
};

export default function Sidebar({ activeItem, setActiveItem }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );

  return (
    <div className="flex flex-col justify-between items-start pb-10">
      <div className="fixed inset-0 flex items-center pl-[3rem] w-[5rem]">
        <div className="flex flex-col gap-3">
          {icons.map(({ icon: Icon, label, to }, index) => (
            <Link
              href={to}
              key={label}
              onClick={() => setActiveItem(label)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex items-center gap-2 cursor-pointer w-fit"
            >
              <div
                className={`w-10 h-10 rounded-full flex justify-center items-center transition ${
                  activeItem === label
                    ? "bg-black text-white"
                    : "bg-[#dcdcdc]/50 text-black"
                }`}
              >
                <Icon className="text-[1.3rem]" />
              </div>

              {hoveredIndex === index && (
                <div className="absolute left-[2rem] -top-1 bg-white/10 w-[4.3rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl">
                  <p className="text-[0.75rem]">{label}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 w-full pb-10 pl-[3rem]">
        <Link
          href={bottomIcon.to}
          onClick={() => setActiveItem("bottom")}
          onMouseEnter={() => setHoveredIndex("bottom")}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative flex items-center gap-2 cursor-pointer w-fit"
        >
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center transition ${
              activeItem === "bottom"
                ? "bg-black text-white"
                : "bg-[#dcdcdc]/50 text-black"
            }`}
          >
            <bottomIcon.icon className="text-[1.3rem]" />
          </div>

          {hoveredIndex === "bottom" && (
            <div className="absolute left-[2rem] -top-1 bg-white/10 w-[8rem] h-[1.5rem] flex justify-center items-center rounded-md backdrop-blur-xl">
              <p className="text-[0.75rem]">{bottomIcon.label}</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
