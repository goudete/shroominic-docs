import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { useState } from 'react';

export default function CodeBlockWithCopy({ codeContent, language }: { codeContent: string, language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeContent)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);  // Reset after 2 seconds
      });
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
      >
        {codeContent}
      </SyntaxHighlighter>
      <div className="absolute top-2 right-2 cursor-pointer" onClick={handleCopyClick}>
        {copied ?
          (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12" /></svg>) :
          (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>)
        }
      </div>
    </div>
  );
}