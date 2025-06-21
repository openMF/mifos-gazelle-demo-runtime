import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const TopNav = ({ title }: { title: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-14 w-full flex items-center justify-between px-4">
      <div className="text-white text-xl font-semibold text-center">
        {title}
      </div>
      <button onClick={toggleTheme} className="text-white cursor-pointer">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
