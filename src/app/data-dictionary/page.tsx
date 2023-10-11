"use client";


import Sidebar from "@/components/sidebar";
import Header from '@/components/header';

import DataDictionary from "@/components/docs/dataDictionary";


export default function Page() {

  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="flex-1 space-y-4 p-8 md:space-y-3 md:p-5 pt-6 mb-10">
          <div className="grid grid-cols-4 h-full">
            <Sidebar />
            <DataDictionary />
          </div>
        </div>
      </div>
    </>
  );
}
