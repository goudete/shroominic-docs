"use client";


export default function Header() {

  return (
    <div className="flex justify-between items-center relative border-b border-[#1d1f24] p-4 pl-10 w-full">
      <div className="flex flex-row items-center space-x-2">
        <div className="flex flex-row space-x-2">
          <div className="text-3xl">
            👾
          </div>
          <h2 className="text-2xl text-slate-100">Code Interpreter API</h2>
        </div>
      </div>
      <div
        className="mr-5 border border-sky-400 rounded-xl text-xs text-sky-400/100 bg-[#141e2a] p-2 hover:cursor-pointer"
        onClick={() => window.open("https://github.com/shroominic/codeinterpreter-api/tree/main")}
      >
        Star us on Github
      </div>
    </div>

  );
} 