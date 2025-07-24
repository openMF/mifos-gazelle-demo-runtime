export const SampleDemoJsonFile = {
  demoID: '123e4567-e89b-12d3-a456-426614174000',
  demoName: 'Create Client',
  DPG: 'mifosx',
  demoDescription: 'Walkthrough for creating a client in Mifosx',
  createdAt: '2025-07-11T14:03:00Z',
  updatedAt: '2025-07-11T14:10:00Z',
  createdBy: 'yash.sharma',
  lastUpdatedBy: 'yash.sharma',
  demoTags: ['pilot', 'onboarding'],
  version: 'v1.0',
  steps: [
    {
      title: 'Login to MifosX',
      url: 'https://sandbox.mifos.community',
      description:
        'Enter the sample credentials to login to MifosX, username: mifos, paswword: password',
    },
    {
      title: 'Login to MifosX',
      url: 'https://ops.mifos.gazelle.test/',
      description:
        'Enter the sample credentials to login to MifosX, username: mifos, paswword: password',
    },
    {
      title: 'Click Institution on the Navbar',
      url: 'https://sandbox.mifos.community/#/home',
      description: 'This will open a dropdown menu. Click on Clients',
    },
    {
      title: 'Click on Create Client button',
      url: 'https://sandbox.mifos.community/#/clients',
      description: 'This will open the Create Client page',
    },
    {
      title: 'Enter the general details',
      url: 'https://sandbox.mifos.community/#/clients/create',
      description: 'Enter the general details of the client and click on next',
    },
    {
      title: 'Add family member (optional)',
      url: 'https://sandbox.mifos.community/#/clients/create',
      description:
        'To add a family member, click on Add and enter the details, click on confirm',
    },
    {
      title: 'Add address',
      url: 'https://sandbox.mifos.community/#/clients/create',
      description:
        'Click on Add and enter the details, click on Add, click on next',
    },
    {
      title: 'Preview and Submit / Cancel',
      url: 'https://sandbox.mifos.community/#/clients/create',
      description:
        'Now you can preview the client details, after you confirm click on Submit or you can cancel the process',
    },
    {
      title: 'View the client',
      description: 'You can view the client details that you created',
    },
  ],
};
