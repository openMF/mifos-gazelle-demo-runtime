import axios from 'axios';

export const fetchDemoListData = async () => {
  if (import.meta.env.VITE_API_URL) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/demoList`
    );
    return response.data.demos;
  }

  // Fallback to local examples when VITE_API_URL is not set
  const response = await axios.get('/examples/metadata.json');
  return response.data.demos.filter(
    (demo: { deleted: boolean }) => !demo.deleted
  );
};
