"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# Bitcoin Chart
This example creates a CodeInterpreterSession and generates a response to plot the bitcoin chart for year 2023:

\`\`\`python
from codeinterpreterapi import CodeInterpreterSession

with CodeInterpreterSession() as session:
  response = session.generate_response("Plot the bitcoin chart for year 2023")

print(response.content)
response.files[0].show_image() # Show the chart image
\`\`\`

The session handles executing the python code to generate the chart in the sandboxed environment. The response contains the chart image that can be displayed.
  
![Bitcoin Chart Output](https://raw.githubusercontent.com/shroominic/codeinterpreter-api/main/examples/assets/bitcoin_chart.png)
Bitcoin Chart Output
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
