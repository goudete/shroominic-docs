"use client";

import { useState } from 'react'; // Import the useState hook
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false); // State for the sidebar


  return (
    <>
      <div className="absolute md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>

      <div className={`${isOpen ? 'block absolute top-18 left-1 h-full' : 'hidden'} md:static md:block col-span-1 overflow-y-auto pl-2 space-y-2 mt-5 w-full z-50`}>
        <div className="">
          <div className="text-lg font-medium pl-3 mt-2">
            Getting Started
          </div>
          <div
            onClick={() => router.push("/welcome")}
            className={`text-[#94949c] ${(pathName.length === 1 && pathName === "/") || (pathName === "/welcome") ? 'bg-[#141E2A] !text-[#4090DA] font-medium' : ''} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Welcome
          </div>
          <div
            onClick={() => router.push("/api-quickstart")}
            className={`text-[#94949c] ${pathName === "/api-quickstart" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            API Quickstart
          </div>
          <div
            onClick={() => router.push("/dashboard-quickstart")}
            className={`text-[#94949c] ${pathName === "/dashboard-quickstart" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Dashboard Quickstart
          </div>
        </div>

        <div className="">
          <div className="text-lg font-medium pl-3 mt-12">
            Walkthrough
          </div>
          <div
            onClick={() => router.push("/system-overview")}
            className={`text-[#94949c] ${pathName === "/system-overview" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            System Overview
          </div>
          <div
            onClick={() => router.push("/conceptual-docs")}
            className={`text-[#94949c] ${pathName === "/conceptual-docs" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Conceptual Docs
          </div>
          <div
            onClick={() => router.push("/data-dictionary")}
            className={`text-[#94949c] ${pathName === "/data-dictionary" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Data Dictionary
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-95" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}