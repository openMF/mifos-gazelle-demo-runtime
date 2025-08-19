import { mapUrl } from '@/types/demodata';

export const getUniqueBaseUrls = (
  url: string,
  setBaseUrls: React.Dispatch<React.SetStateAction<Map<string, string>>>
) => {
  const parsedUrl = new URL(url);
  const baseUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  if (mapUrl.has(baseUrl)) {
    setBaseUrls(prev => {
      const newMap = new Map(prev);
      newMap.set(baseUrl, url);
      return newMap;
    });
  }
  return baseUrl;
};
