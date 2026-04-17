import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        search: {
            background: string;
            icon: string;
        };
    }
    interface PaletteOptions {
        search: {
            background: string;
            icon: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        search: {
            background: "#1E2A47",
            icon: "#0079FF",
        },
    },
});