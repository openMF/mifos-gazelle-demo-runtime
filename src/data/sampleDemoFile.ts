export const SampleDemoJsonFile = {
  demoName: "Create Client",
  demoDescription: "Create a client in MifosX",
  steps:[
    {
        title: "Login to MifosX",
        url:"https://sandbox.mifos.community",
        description: "Enter the sample credentials to login to MifosX, username: mifos, password: password",

    },
    {
        title: "Click Institution on the Navbar",
        url:"https://sandbox.mifos.community/#/home",
        description: "This will open a dropdown menu. Click on Clients",
    },
    {
        title: "Click on Create Client button",
        url:"https://sandbox.mifos.community/#/clients",
        description: "This will open the Create Client page",
    },
    {
        title:"Enter the general details",
        url:"https://sandbox.mifos.community/#/clients/create",
        description:"Enter the general details of the client and click on next",
    },
    {
        title:"Add family member (optional)",
        url:"https://sandbox.mifos.community/#/clients/create",
        description:"To add a family member, click on Add and enter the details, click on confirm",
    },
    {
        title:"Add address",
        url:"https://sandbox.mifos.community/#/clients/create",
        description:"Click on Add and enter the details, click on Add, click on next",
    },
    {
        title:"Preview and Submit / Cancel",
        url:"https://sandbox.mifos.community/#/clients/create",
        description:"Now you can preview the client details, after you confirm click on Submit or you can cancel the process",
    },
    {
        title:"View the client",
        description:"You can view the client details that you created",
    }
  ]
};
