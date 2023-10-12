import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlockWithCopy from '../codeBlockWithCopy';


export default function DashboardQuickstart() {

  return (
    <>
      <div className="col-span-4 md:col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-4 md:col-span-3">
            <div className="text-4xl font-extrabold mb-3">
              Dashboard Quickstart
            </div>
            <div className="text-[#94949c]">
              Get up and running with the NUX Dashboard in 5 minutes.
            </div>

            <div className="text-4xl font-extrabold mb-3 mt-16">
              Installation
            </div>
            <div className="text-[#94949c]">
              Follow these steps to install and setup the project:
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 1: Clone the repository
            </div>
            <CodeBlockWithCopy
              codeContent={`git clone https://github.com/nux-ai/dash.git`}
              language='bash'
            />

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 2: Install dependencies and run the server
            </div>
            <CodeBlockWithCopy
              codeContent={`cd dash/
npm i
npm run dev`}
              language='bash'
            />

          </div>
          {/* <div className="col-span-1">
          <div>On this page</div>
        </div> */}
        </div>
      </div>
    </>
  );
}