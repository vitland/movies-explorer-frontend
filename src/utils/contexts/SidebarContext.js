import { createContext, useContext, useMemo, useState } from 'react';

const SidebarContext = createContext({});
export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = props => {
  const [isOpened, setIsOpened] = useState(false);
  const value = useMemo(() => ({ isOpened, setIsOpened }), [isOpened]);

  return (
    <SidebarContext.Provider value={value}>
      {props.children}
    </SidebarContext.Provider>
  );
};
