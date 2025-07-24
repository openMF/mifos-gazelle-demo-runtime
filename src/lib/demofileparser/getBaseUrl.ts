export const getUniqueBaseUrls = (
  url: string,
  setBaseUrls: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const parsedUrl = new URL(url);
  const baseUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  setBaseUrls(prev => {
    if (prev.includes(baseUrl)) {
      return prev;
    }
    return [...prev, baseUrl];
  });
};
