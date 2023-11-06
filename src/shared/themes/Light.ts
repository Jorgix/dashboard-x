import { cyan, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import logo from './img/logo.png';

export const lightTheme = createTheme({
    palette: {
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
        background: {
            paper: '#ffffff',
            default: '#e0e0e0',
        },
    },
    
});

const customTheme = {
    ...lightTheme,
    logo: {
        logoURL: `url(${logo})`
    },
};

export const themeImages = createTheme(customTheme);


