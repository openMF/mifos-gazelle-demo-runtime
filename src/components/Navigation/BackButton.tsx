import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div title="Back">
      <ArrowLeft
        size={26}
        className="cursor-pointer text-gray-700 dark:text-gray-300"
        onClick={handleBackButtonClick}
      />
    </div>
  );
};
