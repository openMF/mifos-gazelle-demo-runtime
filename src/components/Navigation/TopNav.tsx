import { SunIcon } from "lucide-react";

export const TopNav = ({ title }: { title: string }) => {
  return (
    <div className="h-14 w-full flex items-center justify-between border-b-2 border-[#1579EB] px-4">
      <div className="text-white text-xl font-semibold text-center">
        {title}
      </div>
      <SunIcon className="text-white cursor-pointer" />
    </div>
  );
};
