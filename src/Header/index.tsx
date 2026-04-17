import { Box, Typography, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            }}
        >
            <Typography
                sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1.625rem",
                }}
            >
                devfinder
            </Typography>
            <Button
                onClick={() => {
                    console.log("toggle theme");
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: "0.8125rem",
                    letterSpacing: "2.5px",
                    minWidth: "auto",
                    p: 0,
                }}
            >
                Light
                <LightModeIcon sx={{ fontSize: 20 }} />
            </Button>
        </Box>
    );
}