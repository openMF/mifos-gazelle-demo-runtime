import { Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackButton } from './BackButton';

export const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';
  return (
    <div
      className="h-screen w-14 bg-white dark:bg-gray-900 flex flex-col items-center border-r-2 border-gray-200 
    dark:border-gray-700"
    >
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
      <div className="w-16 flex-1 flex flex-col items-center gap-4 pt-4">
        <div title="Home">
          <Home
            size={30}
            className="cursor-pointer text-gray-700 dark:text-gray-300"
            onClick={handleHomeButtonClick}
          />
        </div>
        {!isHomePage && <BackButton />}
      </div>
    </div>
  );
};
