
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material";

export const AppContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
}));

export const AppContentContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "800px",
    pt: 15,
    gap: 2,
});