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



export default function Home() {
  
  const markdownContent = `# Welcome
This project provides a LangChain implementation of the ChatGPT Code Interpreter. It allows you to have a back and forth chat with the AI assistant to get it to help with programming tasks, data analysis, and more. You can run everything local except the LLM using your own OpenAI API Key.

Some key features:

- Sandboxed execution of Python code snippets provided by the AI assistant using CodeBox. CodeBox is the simplest cloud infrastructure for your LLM Apps.
- Automatic handling of file uploads/downloads 
- Support for stateful conversations with chat history
- Extensible architecture to add custom tools and logic
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
