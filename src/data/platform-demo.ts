export const SamplePlatformDemo = {
  demoID: '123e4567-e89b-12d3-a456-426614174000',
  demoName: 'View payment status',
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
      title: 'Login to Vnext',
      url: 'http://vnextadmin.mifos.gazelle.test/login',
      description:
        'Enter the sample credentials to login to MifosX, username: admin, paswword: superMegaPass',
    },
    {
      title: 'Select Account Lookup -> Associations',
      url: 'http://vnextadmin.mifos.gazelle.test/home',
      description:
        'If you have logged in correctly, yoy should be on vnext home page. Click on Account lookup on the navigation menu left side. Then select Associations',
    },
    {
      title: 'Do customer lookup to find Associations',
      url: 'http://vnextadmin.mifos.gazelle.test/account-lookup-associations',
      description:
        'You can now find the payeer and payee on the table and check which bank they belong to, Bluebank or Greenbank. Now you know the clients belong to which bank, and so we can got to mifos to find the transactions for the client',
    },
    {
      title: 'Login to mifos',
      url: 'http://mifos.mifos.gazelle.test/#/login',
      description:
        'Click on the Tenent dropdown, Select the bank of client you want to check.Enter the sample credentials to login to MifosX, username: mifos, password: password, click on login',
    },
    {
      title: 'Click Institution on the Navbar',
      url: 'http://mifos.mifos.gazelle.test/#/home',
      description: 'This will open a dropdown menu. Click on Clients',
    },
    {
      title: 'Select the required client',
      url: 'http://mifos.mifos.gazelle.test/#/clients',
      description:
        'You can see all the clients in the system. Click on the client you want to check the transactions for.',
    },
    {
      title: 'Click on the savings account you want to check',
      url: 'http://mifos.mifos.gazelle.test/#/clients',
      description:
        'Now you can see the clinet, scroll down to Saving Accounts section. Click on the account you want to check the transactions for.',
    },
    {
      title: 'Click on the transactions tab to view transactions',
      url: 'http://mifos.mifos.gazelle.test/#/clients',
      description:
        'You can see saving account details, click on the transactions tab. You can see the transactions for the client. Click on the transaction you want to check the status of.',
    },
    {
      title: 'View the transaction status',
      url: 'http://mifos.mifos.gazelle.test/#/clients',
      description:
        'You can undo the transaction, or go back to the previous page',
    },
  ],
};
