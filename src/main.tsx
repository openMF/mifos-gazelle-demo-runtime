import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SideNav } from "./components/Navigation/SideNav.tsx";
import { TopNav } from "./components/Navigation/TopNav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen overflow-hidden">
      <div className="fixed top-0 left-14 right-0 h-16 bg-[#1579EB] z-10">
        <TopNav title="Mifos Product Demo" />
      </div>
      <div className="fixed top-0 left-0 w-14 h-screen bg-white z-10">
        <SideNav />
      </div>
      <div className="ml-14 mt-16 h-[calc(100vh-3.5rem)] overflow-auto">
        <App />
      </div>
    </div>
  </StrictMode>
);
