import { Box, Alert, ThemeProvider } from "@mui/material";
import SearchBar from "./SearchBar";
import { fetchUser } from "./api/fetchUser";
import { useState } from "react";
import UserDetails from "./UserDetails";
import Header from "./Header";
import { theme } from "./theme";

export type User = {
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string;
}

function App() {
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [user, setUser] = useState<User | null>();

  const handleSearch = async (username: string) => {
    try {
      const userInfo = await fetchUser(username);
      console.log(userInfo);
      setUser(userInfo);
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setUser(null);
      }

    }
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Header />
          <SearchBar onSearch={handleSearch} />
          {errorMessage && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
          {user != null && <UserDetails user={user} />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;