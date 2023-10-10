"use client";

import { useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import Welcome from "@/components/docs/welcome";
import Quickstart from "@/components/docs/quickstart";
import SystemOverview from "@/components/docs/systemOverview";
import ConceptualDocs from "@/components/docs/conceptualDocs";
import DataDictionary from "@/components/docs/dataDictionary";


export default function Home() {
  const [selectedDoc, setSelectedDoc] = useState<string>("welcome");

  const onDocClick = (doc: string) => {
    setSelectedDoc(doc);
  }

  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <div className="flex justify-between relative border-b border-[#1d1f24] p-4 pl-10 w-full">
          <h2 className="text-2xl text-slate-100">cluster</h2>
          <div className="flex flex-row items-center">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src="https://avatars.githubusercontent.com/u/15973166?v=4" />
            </Avatar>
            <span className="hidden md:inline">Ethan Steininger</span>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 md:space-y-3 md:p-5 pt-6 mb-10">
          <div className="grid grid-cols-4 h-full">
            <div className="col-span-1 overflow-y-auto pl-2 space-y-2 mt-5">
              <div className="">
                <div className="text-lg font-medium pl-3 mt-2">
                  Getting Started
                </div>
                <div
                  onClick={() => onDocClick("welcome")}
                  className={`text-[#94949c] ${selectedDoc === "welcome" ? 'bg-[#141E2A] !text-[#4090DA] font-medium' : ''} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
                >
                  Welcome
                </div>
                <div
                  onClick={() => onDocClick("quickstart")}
                  className={`text-[#94949c] ${selectedDoc === "quickstart" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
                >
                  Quickstart
                </div>
              </div>

              <div className="">
                <div className="text-lg font-medium pl-3 mt-12">
                  Walkthrough
                </div>
                <div
                  onClick={() => onDocClick("system-overview")}
                  className={`text-[#94949c] ${selectedDoc === "system-overview" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
                >
                  System Overview
                </div>
                <div
                  onClick={() => onDocClick("conceptual-docs")}
                  className={`text-[#94949c] ${selectedDoc === "conceptual-docs" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
                >
                  Conceptual Docs
                </div>
                <div
                  onClick={() => onDocClick("data-dictionary")}
                  className={`text-[#94949c] ${selectedDoc === "data-dictionary" ? `bg-[#141E2A] !text-[#4090DA] font-medium` : ``} hover:cursor-pointer hover:bg-[#141E2A] rounded py-2 pl-3`}
                >
                  Data Dictionary
                </div>
              </div>
            </div>
            <div className="col-span-3 overflow-y-auto">
              {
                selectedDoc === "welcome" && <Welcome />
              }
              {
                selectedDoc === "quickstart" && <Quickstart />
              }
              {
                selectedDoc === "system-overview" && <SystemOverview />
              }
              {
                selectedDoc === "conceptual-docs" && <ConceptualDocs />
              }
              {
                selectedDoc === "data-dictionary" && <DataDictionary />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
