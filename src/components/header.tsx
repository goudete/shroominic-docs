
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header() {

  return (
    <div className="flex justify-between relative border-b border-[#1d1f24] p-4 pl-10 w-full">
      <div className="flex flex-row space-x-2">
        <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" className="mt-1">
          <circle cx="11" cy="11" r="11" fill="white" />
        </svg>
        <h2 className="text-2xl text-slate-100">cluster</h2>
      </div>
      <div className="flex flex-row items-center">
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="https://avatars.githubusercontent.com/u/15973166?v=4" />
        </Avatar>
        <span className="hidden md:inline">Ethan Steininger</span>
      </div>
    </div>
  );
}