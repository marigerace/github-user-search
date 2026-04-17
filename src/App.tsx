import { Alert, ThemeProvider } from "@mui/material";
import SearchBar from "./SearchBar";
import { fetchUser } from "./api/fetchUser";
import { useState } from "react";
import UserDetails from "./UserDetails";
import { AppContainer, AppContentContainer } from "./styles";
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
      <AppContainer>
        <AppContentContainer>
          <Header />
          <SearchBar onSearch={handleSearch} />
          {errorMessage && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
          {user != null && <UserDetails user={user} />}
        </AppContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;