import { Box, ThemeProvider } from "@mui/material";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { lightTheme } from "../themes/Light";
import { darkTheme } from "../themes/Dark";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IAppthemeProviderProps {
  children: React.ReactNode;
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppthemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return lightTheme;
    return darkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={theme.palette.background.default}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </ThemeContext.Provider>
  );
};
