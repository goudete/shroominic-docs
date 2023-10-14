"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# CodeInterpreterSession
The CodeInterpreterSession is the main class that manages a conversational session between the user and AI agent. It handles starting, stopping and checking status of the secure isolated code execution environment. 

Key responsibilities:

- Starting and stopping the compute session
- Sending user input and files to the agent
- Running code in the compute container 
- Retrieving output files and images
- Managing the chat history
- Logging 

It provides methods like:

- \`generate_response()\`: Generate AI response for user input
- \`start() / stop()\`: Start and stop the session
- \`log()\`: Log messages
- \`show_code\` - Callback to print code before running.


The response generation happens through a pipeline:

1. User input is parsed 
2. Code is executed if needed
3. Files are processed if needed
4. Final response is formatted and returned

The \`generate_response()\` method handles this entire pipeline.

Usage:

\`\`\`python
from codeinterpreterapi import CodeInterpreterSession

with CodeInterpreterSession() as session:
  response = session.generate_response("Plot a histogram of the data")
print(response.content) # print AI response
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
