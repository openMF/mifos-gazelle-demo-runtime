import { fetchDemoListData } from '@/lib/api/fetchDemoListData';
import { createContext, useContext, useEffect, useState } from 'react';

const DemosListContext = createContext([]);

export function DemoListProvider({ children }: { children: React.ReactNode }) {
  const [demosList, setDemosList] = useState([]);

  useEffect(() => {
    fetchDemoListData().then(fetchedData => {
      setDemosList(fetchedData);
    });
  }, []);

  return (
    <DemosListContext.Provider value={demosList}>
      {children}
    </DemosListContext.Provider>
  );
}

export function useDemosList() {
  const context = useContext(DemosListContext);
  if (context === undefined) {
    throw new Error('useDemosList must be used within a DemoListProvider');
  }
  return context;
}
