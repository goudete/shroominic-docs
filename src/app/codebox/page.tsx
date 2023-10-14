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

  const markdownContent = `# CodeBox
The CodeBox class provides the isolated secure environment for executing python code. It is used by the CodeInterpreterSession internally.

It provides methods like:

- \`upload() / download()\`: Upload and download files
- \`run()\`: Run python code
- \`install()\`: Install python packages

The CodeBox handles setting up the environment, installing packages, running code, capturing output and making it available.

It uses Docker containers under the hood to provide the isolated env.

Usage:

\`\`\`python
from codeboxapi import CodeBox

codebox = CodeBox()
codebox.upload("data.csv", b"1,2,3\
4,5,6") 
output = codebox.run("import pandas as pd; df = pd.read_csv('data.csv')")
print(output.content)
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
