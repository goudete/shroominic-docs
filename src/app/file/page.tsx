"use client";

import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);


import Sidebar from "@/components/sidebar";
import Header from '@/components/header';


export default function Page() {

  const markdownContent = `# File
The File class is used to represent files that are uploaded or downloaded during the session. 

It stores the filename and binary content of the file.

It provides utility methods like:

- \`from_path()\`: Create File from filesystem path
- \`from_url\` - Create File from URL
- \`save()\`: Save File to filesystem path
- \`show_image()\`: Display image File

Usage:

\`\`\`python
from codeinterpreterapi import File

file = File.from_path("image.png")
file.show_image() # display image
file.save("copy.png") # save copy
\`\`\`

File objects can be passed to \`CodeInterpreterSession.generate_response\` to make them available to the agent.
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
