import { Box, Typography, Button, Alert } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchBar from "./SearchBar";
import { fetchUser } from "./api/fetchUser";
import { useState } from "react";

function App() {
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const handleSearch = async (username: string) => {
    try {
      const user = await fetchUser(username);
      console.log(user);
    } catch (error) {
      if (error instanceof Error)
        setErrorMessage(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#141D2F",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "800px",
          pt: 15,
          gap: 2,
        }}
      >
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
        <SearchBar onSearch={handleSearch} />
        {errorMessage && (
          <Alert severity="error">{errorMessage}</Alert>
        )}
      </Box>
    </Box>
  );
}

export default App;
