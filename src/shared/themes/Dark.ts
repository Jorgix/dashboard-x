import { cyan, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette:{
        primary: {
            main: red[700],
            dark: red[600],
            light: red[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background:{
            paper: '#303134',
            default: '#202124',
        }
    } 
})