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
            onClick={() => router.push("/installation")}
            className={`text-[#94949c] ${pathName === "/installation" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Installation
          </div>
          <div
            onClick={() => router.push("/usage")}
            className={`text-[#94949c] ${pathName === "/usage" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Usage
          </div>
        </div>

        <div className="">
          <div className="text-lg font-medium pl-3 mt-12">
            Code Interpreter Concepts
          </div>
          <div
            onClick={() => router.push("/concepts-overview")}
            className={`text-[#94949c] ${pathName === "/concepts-overview" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Concepts Overview
          </div>
          <div
            onClick={() => router.push("/code-interpreter-session")}
            className={`text-[#94949c] ${pathName === "/code-interpreter-session" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            CodeInterpreterSession
          </div>
          <div
            onClick={() => router.push("/codebox")}
            className={`text-[#94949c] ${pathName === "/codebox" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            CodeBox
          </div>
          <div
            onClick={() => router.push("/file")}
            className={`text-[#94949c] ${pathName === "/file" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            File
          </div>
          <div
            onClick={() => router.push("/user-request")}
            className={`text-[#94949c] ${pathName === "/user-request" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            UserRequest
          </div>
          <div
            onClick={() => router.push("/code-interpreter-response")}
            className={`text-[#94949c] ${pathName === "/code-interpreter-response" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            CodeInterpreterResponse
          </div>
        </div>

        <div className="">
          <div className="text-lg font-medium pl-3 mt-12">
            Deployment
          </div>
          <div
            onClick={() => router.push("/deploy")}
            className={`text-[#94949c] ${pathName === "/deploy" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Deploy
          </div>
        </div>

        <div className="">
          <div className="text-lg font-medium pl-3 mt-12">
            Examples
          </div>
          <div
            onClick={() => router.push("/bitcoin-chart")}
            className={`text-[#94949c] ${pathName === "/bitcoin-chart" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Bitcoin Chart
          </div>
          <div
            onClick={() => router.push("/iris-dataset")}
            className={`text-[#94949c] ${pathName === "/iris-dataset" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Iris Dataset
          </div>
          <div
            onClick={() => router.push("/streamlit-webapp")}
            className={`text-[#94949c] ${pathName === "/streamlit-webapp" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
          >
            Streamlit Webapp
          </div>
        </div>

      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-95" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}