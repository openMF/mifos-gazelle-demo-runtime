export const mapUrl = new Map<string, string>([
  ['http://mifos.mifos.gazelle.test', 'MifosX'],
  ['https://ops.mifos.gazelle.test', 'PHEE'],
  ['http://vnextadmin.mifos.gazelle.test', 'Vnext'],
]);

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
