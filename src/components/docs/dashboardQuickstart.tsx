import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function DashboardQuickstart() {

  return (
    <>
      <div className="col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-3">
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
            <div>
              <SyntaxHighlighter language="bash" style={a11yDark}>
                {`$ git clone https://github.com/nux-ai/dash.git`}
              </SyntaxHighlighter>
            </div>

            <div className="text-2xl font-extrabold mb-3 mt-12">
              Step 2: Install dependencies and run the server
            </div>
            <div>
              <SyntaxHighlighter language="bash" style={a11yDark}>
                {`$ cd dash/
$ npm i
$ npm run dev`}
              </SyntaxHighlighter>
            </div>

            <div className="text-4xl font-extrabold mb-3 mt-16">
              Key Concepts
            </div>
            <div className="text-[#94949c]">
              This repo uses <a className="text-sky-600" href="https://nextjs.org/docs/pages">Next pages router</a>. To add a new route, create a file under the pages directory. The name of the file will be the name of the route.
            </div>


          </div>
          {/* <div className="col-span-1">
          <div>On this page</div>
        </div> */}
        </div>
      </div>
    </>
  );
}