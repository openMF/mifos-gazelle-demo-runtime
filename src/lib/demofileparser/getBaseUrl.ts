export const mapUrl = new Map<string, string>([
  ['https://sandbox.mifos.community', 'MifosX'],
  ['https://ops.mifos.gazelle.test', 'PHEE'],
]);

export const getUniqueBaseUrls = (
  url: string,
  setBaseUrls: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const parsedUrl = new URL(url);
  const baseUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  if (mapUrl.has(baseUrl)) {
    setBaseUrls(prev => {
      if (prev.includes(baseUrl)) {
        return prev;
      }
      return [...prev, baseUrl];
    });
  }
};
