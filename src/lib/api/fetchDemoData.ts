import axios from 'axios';

export const fetchDemoData = async (demotitle: string) => {
  if (import.meta.env.VITE_API_URL) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/demoData`,
      { params: { demotitle } }
    );
    return response.data;
  }

  // Fallback to local examples when VITE_API_URL is not set
  // demotitle is the demoId from the URL path
  const response = await fetch(`/examples/${demotitle}.json`, {
    headers: { 'Accept': 'application/json' }
  });
  const data = await response.json();
  return data;
};
