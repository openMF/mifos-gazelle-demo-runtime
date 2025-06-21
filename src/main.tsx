import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SideNav } from "./components/Navigation/SideNav.tsx";
import { TopNav } from "./components/Navigation/TopNav.tsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="h-screen w-screen overflow-hidden bg-[#1579EB] dark:bg-gray-900">
        <div className="fixed top-0 left-14 right-0 h-14 bg-[#1579EB] z-10">
          <TopNav title="Mifos Product Demo" />
        </div>
        <div className="fixed top-0 left-0 w-14 h-screen bg-white dark:bg-gray-900 z-10">
          <SideNav />
        </div>
        <div className="ml-14 mt-14 h-[calc(100vh-3.5rem)] overflow-auto">
          <App />
          <div className="bg-white dark:bg-gray-900 py-12 px-6 border-t border-gray-200 dark:border-white">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Discover the power of open-source financial technology solutions
              </p>
              <div className="flex justify-center">
                <img
                  src="/gazelle.svg"
                  alt="Mifos Logo"
                  width={80}
                  height={80}
                  className="opacity-80 dark:opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
);
