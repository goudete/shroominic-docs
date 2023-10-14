"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# Usage
To create a session and generate a response:

\`\`\`python
from codeinterpreterapi import CodeInterpreterSession, settings

# set api key (or automatically loads from env vars)
settings.OPENAI_API_KEY = "sk-***************"

# create a session
with CodeInterpreterSession() as session:
    # generate a response based on user input
    response = session.generate_response(
        "Plot the bitcoin chart of year 2023"
    )

    # output the response
    response.show()
\`\`\`
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
