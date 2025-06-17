import { Home } from "lucide-react";

export const SideNav = () => {
  return (
    <div className="h-screen w-14 bg-white flex flex-col items-center border-r-2 border-gray-200">
      <div className="logo h-16 w-full flex items-center justify-center border-b-2 border-gray-200">
        <img
          src="/react.svg"
          alt="logo"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
      <div className="w-16 flex flex-1 justify-center pt-4">
          <Home size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};
