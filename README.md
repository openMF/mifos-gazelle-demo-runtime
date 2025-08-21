# Mifos Gazelle Demo Runtime

## Overview

The Mifos Gazelle Demo Runtime is an open-source, web-based tool designed to perform interactive demos using Gazelle-deployed Digital Public Goods (DPGs). It provides an intuitive and user-friendly interface to showcase complex functionalities and workflows in a step-by-step manner.

Demos are created using the companion tool, [Mifos Gazelle Demo Creator](https://github.com/openMF/mifos-gazelle-demo-creator), and are stored in a jFrog repository.

The Demo Runtime UI allows users to navigate to their desired demo. The interface is split into two panels:

- **Left Panel:** Displays a clear, step-by-step explanation of the demo, guiding the user through the process.
- **Right Panel:** Renders the live, deployed DPGs within iframes, allowing for direct and interactive engagement.

This side-by-side layout makes it incredibly easy to follow complex flows, as users can read the instructions and perform the actions in the live application simultaneously. Navigation between steps and different DPGs is seamless, making it the most intuitive way to understand the system's capabilities.

## Features

- **Interactive Live Demos:** Engage directly with deployed DPGs in real-time.
- **Side-by-Side View:** Follow guided steps on one side while interacting with the application on the other.
- **Step-by-Step Guidance:** Break down complex workflows into easy-to-understand steps.
- **Seamless Navigation:** Effortlessly move between different stages of a demo and between different DPGs.
- **Centralized Demo Repository:** Loads demos created with the Demo Creator from a centralized jFrog repository.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Installation Guide

1.  **Clone the repository:**
    Open your terminal and run the following command to clone the project:

    ```sh
    git clone [https://github.com/openMF/mifos-gazelle-demo-runtime.git](https://github.com/openMF/mifos-gazelle-demo-runtime.git)
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd mifos-gazelle-demo-runtime
    ```

3.  **Install dependencies:**
    Install the required npm packages.

    ```sh
    npm install
    ```

    _or if you use yarn:_

    ```sh
    yarn install
    ```

4.  **Run the application:**
    Start the development server.

    ```sh
    npm start
    ```

    _or if you use yarn:_

    ```sh
    yarn start
    ```

5.  **View in browser:**
    Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Related Links

- **Jira Story:** [GAZ-27](https://mifosforge.jira.com/browse/GAZ-27) - The original story for this project.
- **Demo Creator Tool:** [Mifos Gazelle Demo Creator](https://github.com/openMF/mifos-gazelle-demo-creator) - The tool used to create the demos that this runtime consumes.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please see the `CONTRIBUTING.md` file for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
