import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: "home",
        path: "/pagina-inicial",
        label: "Página inicial",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Toogle Theme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
