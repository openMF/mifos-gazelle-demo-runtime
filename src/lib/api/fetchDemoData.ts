import axios from "axios";

export const fetchDemoData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/demoData`); 
      return response.data;
};