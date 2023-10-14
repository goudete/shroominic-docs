"use client";

import { marked } from 'marked';

import Sidebar from "@/components/sidebar";
import Header from '@/components/header';



export default function Page() {
  const markdownContent = `# Installation
## Install Dependencies

To install, it's recommended to create a virtual environment (using \`venv\` in the example below):

\`\`\`
python3 -m venv codeinterpreterenv
source codeinterpreterenv/bin/activate
\`\`\`

Then install the package:

\`\`\`
pip install "codeinterpreterapi[all]"
\`\`\`

Everything for local experiments are installed with the all extra. For deployments, you can use \`pip install codeinterpreterapi\` instead which does not install the additional dependencies.

## Set Up Environment Variables


You will also need to configure API keys for the AI model you want to use, either OpenAI, Anthropic, or Azure. 

For OpenAI, create a \`.env\` file with:

\`\`\`
OPENAI_API_KEY=sk-...
\`\`\`
or export as an environment variable in your terminal:

\`\`\`bash
export OPENAI_API_KEY=your_openai_api_key
\`\`\`

For Azure, use:

\`\`\`
OPENAI_API_TYPE=azure
OPENAI_API_VERSION=2023-07-01-preview
OPENAI_API_BASE=
DEPLOYMENT_NAME=
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
