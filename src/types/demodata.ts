export interface DemoData {
  demoId: string;
  name: string;
  description: string;
  tags: string[];
}

export type ProductDemosProps = {
  product: 'mifosx' | 'phee' | 'vnext';
};

export interface PlatformDemoData {
  demoId: string;
  name: string;
  description: string;
  tags: string[];
}

export const allPlatforms = ['MifosX', 'PHEE', 'Vnext'];

export const mapUrl = new Map<string, string>([
  ['http://mifos.mifos.gazelle.test', 'MifosX'],
  ['https://ops.mifos.gazelle.test', 'PHEE'],
  ['http://vnextadmin.mifos.gazelle.test', 'Vnext'],
]);
