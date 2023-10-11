
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header() {

  return (
    <div className="flex justify-between relative border-b border-[#1d1f24] p-4 pl-10 w-full">
      <h2 className="text-2xl text-slate-100">cluster</h2>
      <div className="flex flex-row items-center">
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="https://avatars.githubusercontent.com/u/15973166?v=4" />
        </Avatar>
        <span className="hidden md:inline">Ethan Steininger</span>
      </div>
    </div>
  );
}