import axios from 'axios';

export const fetchDemoData = async (demotitle: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/demoData`, {
    params: { demotitle },
  });
  console.log(response);
  return response.data;
};
