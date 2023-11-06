import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../themes/img/logo.png";
import { House } from "@mui/icons-material";
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        sx={{ width: "500px" }}
        onClose={toggleDrawerOpen}
      >
        <Box
          component="img"
          width={smDown ? theme.spacing(15) : theme.spacing(20)}
          padding={smDown ? theme.spacing(3) : theme.spacing(2)}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={theme.palette.background.default}
          src={logo}
          flexDirection={"column"}
        />
        <Divider />
        <Box flex={1}>
          <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <House />
              </ListItemIcon>
              <ListItemText primary="Página Inicial" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(25)}>
        {children}
      </Box>
    </>
  );
};
