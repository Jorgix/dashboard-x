import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { lightTheme } from "./shared/themes/Light";
import {ThemeProvider} from "@mui/material";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <div className="App">
      <AppRoutes />
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

