import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SideNav } from "./components/Navigation/SideNav.tsx";
import { TopNav } from "./components/Navigation/TopNav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen overflow-hidden">
      <div className="fixed top-0 left-14 right-0 h-14 bg-[#1579EB] z-10">
        <TopNav title="Mifos Product Demo" />
      </div>
      <div className="fixed top-0 left-0 w-14 h-screen bg-white z-10">
        <SideNav />
      </div>
      <div className="ml-14 mt-16 h-[calc(100vh-3.5rem)] overflow-auto">
        <App />
        <div className="border-t border-gray-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Discover the power of open-source financial technology solutions
          </p>
        </div>
      </div>
      </div>
    </div>
  </StrictMode>
);
