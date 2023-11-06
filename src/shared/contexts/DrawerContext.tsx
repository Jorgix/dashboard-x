import React, { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerOpen: () => void;
  setDrawerOption: (newDrawerOptions: IDrawerOptions[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setThemeName] = useState(false);
  const [drawerOptions, setdrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setThemeName((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setdrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOption: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
