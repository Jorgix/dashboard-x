import { Box, useTheme, Icon, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { useDrawerContext } from "../contexts";

interface ILayoutBasedePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBasedePagina: React.FC<ILayoutBasedePaginaProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        alignItems={"center"}
        display={"flex"}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
