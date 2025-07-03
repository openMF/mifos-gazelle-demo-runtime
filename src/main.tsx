import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SideNav } from './components/Navigation/SideNav.tsx';
import { TopNav } from './components/Navigation/TopNav.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <div className="think-blue-scrollbar h-screen w-screen overflow-hidden dark:bg-gray-900">
          <div className="fixed top-0 left-14 right-0 h-14 bg-[#1579EB] z-10">
            <TopNav title="Mifos Product Demo" />
          </div>
          <div className="fixed top-0 left-0 w-14 h-screen bg-white dark:bg-gray-900 z-10">
            <SideNav />
          </div>
          <div className="ml-14 mt-14 h-[calc(100vh-3.5rem)] overflow-auto flex flex-col">
            <div className="flex-grow">
              <App />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
