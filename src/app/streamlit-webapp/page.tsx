"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# Using the Streamlit Webapp
The streamlit webapp allows interacting with the API through a GUI:

\`\`\`bash
streamlit run frontend/app.py --browser.gatherUsageStats=False
\`\`\`

This will launch the webapp where you can:

- Write prompts and see results immediately 
- Upload files that get passed to the API
- Download any files produced by the API
- Switch between different models like GPT-3.5 Turbo

So the webapp allows easily leveraging the API through a graphical interface.
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
