export interface ProductDemoData {
  demoID: string;
  demoName: string;
  demoDescription: string;
}

export type ProductDemosProps = {
  product: 'mifosx' | 'phee' | 'vnext';
};

export interface PlatformDemoData {
  demoID: string;
  demoName: string;
  demoDescription: string;
  platforms: string[];
}

export const allPlatforms = ['MifosX', 'PHEE', 'Vnext'];

export const mapUrl = new Map<string, string>([
  ['http://mifos.mifos.gazelle.test', 'MifosX'],
  ['https://ops.mifos.gazelle.test', 'PHEE'],
  ['http://vnextadmin.mifos.gazelle.test', 'Vnext'],
]);
