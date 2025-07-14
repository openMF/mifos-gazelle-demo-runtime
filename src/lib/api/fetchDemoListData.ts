import axios from 'axios';

export const fetchDemoListData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/demoList`);
      return response.data;
};