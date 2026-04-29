# Mifos Gazelle Demo Runtime

## Overview

The Mifos Gazelle Demo Runtime is an open-source, web-based tool designed to perform interactive demos using Gazelle-deployed Digital Public Goods (DPGs). It provides an intuitive and user-friendly interface to showcase complex functionalities and workflows in a step-by-step manner.

Demos are created using the companion tool, [Mifos Gazelle Demo Creator](https://github.com/openMF/mifos-gazelle-demo-creator), and are stored in a jFrog repository.

The Demo Runtime UI features a split-panel interface:

- **Left Panel:** Displays clear, step-by-step explanations guiding users through the demo process
- **Right Panel:** Renders live, deployed DPGs within iframes for direct interactive engagement

This side-by-side layout makes it easy to follow complex workflows, as users can read instructions while performing actions in the live application simultaneously.

## Features

- **Interactive Live Demos:** Engage directly with deployed DPGs in real-time
- **Split-Panel Interface:** Follow guided steps while interacting with applications
- **Step-by-Step Guidance:** Break down complex workflows into manageable steps
- **Seamless Navigation:** Move effortlessly between demo stages and different DPGs
- **Centralized Repository:** Loads demos from a centralized jFrog repository
- **Demo Categories:** Support for both product demos (single DPG) and platform demos (multi-DPG)
- **Search & Filter:** Quickly find specific demos using built-in search functionality

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/openMF/mifos-gazelle-demo-runtime.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd mifos-gazelle-demo-runtime
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

   _or if you use yarn:_

   ```sh
   yarn install
   ```

4. **Run the application:**

   ```sh
   npm start
   ```

   _or if you use yarn:_

   ```sh
   yarn start
   ```

5. **View in browser:**
   Open your web browser and navigate to `http://localhost:5173`

### How to Use

After running the application, follow these steps to access and run demos:

#### Step 1: Select Demo Type

Choose from the available demo categories:

- **Product Demos:** Single DPG demonstrations for platforms like MifosX, PHEE, Vnext, etc.
- **Platform Demos:** Multi-DPG demonstrations showcasing integrated workflows

#### Step 2: Browse Available Demos

Once you select a demo type, you'll see a comprehensive table displaying:

- **Title:** Name of the demo
- **Description:** Detailed explanation of the demo's purpose and workflow
- **Required Platforms:** (Platform demos only) List of DPGs that must be deployed

Use the search and filter functionality to quickly locate specific demos.

#### Step 3: Deploy Required Platforms

**For Product Demos:**
Deploy the selected platform/DPG using the [Demo Creator tool](https://github.com/openMF/mifos-gazelle-demo-creator).

**For Platform Demos:**

1. Note the required platforms listed in the demo table
2. Use the Demo Creator to deploy each required platform
3. Ensure all platforms are successfully deployed before proceeding

#### Step 4: Launch Interactive Demo

After successful platform deployment:

1. Return to the demo table
2. Click "Start Demo" for your chosen demonstration
3. The interactive demo interface will load with:
   - **Left Panel:** Step-by-step instructions and explanations
   - **Right Panel:** Live interactive iframe(s) of deployed applications

#### Step 5: Navigate the Demo

Follow the guided workflow using the navigation controls, reading instructions on the left while performing actions in the live application on the right.

## Architecture

The application follows a modern React-based architecture with key components:

- **Demo Selector:** Interface for choosing demo types and browsing demonstrations
- **Demo Table:** Searchable and filterable display with metadata
- **Demo Player:** Split-panel interface for interactive demonstrations
- **Repository Integration:** Connection to jFrog repository for content management

## Development

### Project Structure

```
mifos-gazelle-demo-runtime/
├── src/
|   ├── assets/      # Static assets
|   ├── components/  # React components
|   ├── data/        # Data files
|   ├── pages/       # React pages
│   ├── routes/      # React routes
|   ├── context/     # React context
|   ├── lib/         # API calls and functions
|   ├── types/       # Typescript types
├── public/             # Static assets
└── package.json        # Project dependencies
```

### Available Scripts

- `npm start` / `yarn start`: Runs the app in development mode
- `npm build` / `yarn build`: Builds the app for production
- `npm test` / `yarn test`: Launches the test runner

## Related Links

- **Jira Story:** [GAZ-27](https://mifosforge.jira.com/browse/GAZ-27) - Original project story
- **Demo Creator Tool:** [Mifos Gazelle Demo Creator](https://github.com/openMF/mifos-gazelle-demo-creator) - Tool for creating demos

## Contributing

We welcome contributions from the open-source community! Any contributions you make are greatly appreciated.

Please see the `CONTRIBUTING.md` file for details on our code of conduct and the process for submitting pull requests.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For questions, issues, or support:

- Open an issue on GitHub
- Check the project's Jira board for known issues
- Refer to the Demo Creator documentation for deployment questions

## License

This project is licensed under the Mozilla Public License Version 2.0. See the `LICENSE` file for details.

## Acknowledgments

- The Mifos community for continuous support and feedback
- Contributors to the Gazelle ecosystem
- All developers working on Digital Public Goods initiatives
