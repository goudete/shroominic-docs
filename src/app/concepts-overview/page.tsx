"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# Concepts Overview
| name | description |
|-|-|
| CodeInterpreterSession | Main class that manages a code execution session |
| CodeBox | Handles code execution in a sandboxed environment |
| File | Represents a file for upload/download to CodeBox |
| UserRequest | User input message with optional file attachments |
| CodeInterpreterResponse | AI response message with optional files and code log |
  `;

  const parsedContent = marked.parse(markdownContent);

  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="flex-1 space-y-4 p-8 md:space-y-3 md:p-5 pt-6 mb-10">
          <div className="grid grid-cols-4 h-full">
            <Sidebar />
            <div className="col-span-4 md:col-span-3 overflow-y-auto">
              <div className="grid grid-cols-4 p-10">
                <div className="col-span-4 md:col-span-3">
                  <div className="prose prose-invert mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}