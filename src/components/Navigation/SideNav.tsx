import { Home } from "lucide-react";

export const SideNav = () => {
  return (
    <div className="h-screen w-14 bg-white dark:bg-gray-900 flex flex-col items-center border-r-2 border-gray-200 
    dark:border-gray-700">
      <div className="logo h-14 w-full flex items-center justify-center border-b-2 border-gray-200 dark:border-gray-700">
        <div className="p-1 rounded-full">
          <img
            src="/gazelle.svg"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-16 flex flex-1 justify-center pt-4">
        <Home size={30} className="cursor-pointer text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  );
};
