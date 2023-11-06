import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import { useDrawerContext } from "../../contexts";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IMenuLateralProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({
    path: resolvedPath.pathname,
    end: false,
  });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon sx={{ minWidth: 35 }}>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        sx={{ width: "500px" }}
        onClose={toggleDrawerOpen}
      >
        <Link to={"/pagina-inicial"}>
          <Box
            component="img"
            width={smDown ? theme.spacing(15) : theme.spacing(17)}
            padding={smDown ? theme.spacing(3) : theme.spacing(2)}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={theme.palette.background.default}
            src={logo}
            flexDirection={"column"}
          />
        </Link>
        <Divider />
        <Box flex={1}>
          <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
            {drawerOptions.map((drawerOption) => (
              <ListItemLink
                to={drawerOption.path}
                key={drawerOption.path}
                icon={drawerOption.icon}
                label={drawerOption.label}
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            ))}
          </List>
        </Box>
      </Drawer>

      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(25)}>
        {children}
      </Box>
    </>
  );
};
