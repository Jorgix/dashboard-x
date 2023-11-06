import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components/menu-lateral/menuLateral";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <DrawerProvider>
      <AppThemeProvider>
        <div className="App">
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </div>
      </AppThemeProvider>
    </DrawerProvider>
  );
};
