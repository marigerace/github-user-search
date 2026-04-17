import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useState, type SubmitEvent } from "react";

type SearchBarProps = {
  onSearch: (text: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [text, setText] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) return;

    onSearch(trimmedText);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: 3,
        backgroundColor: theme.palette.search.background,
        width: "100%",
      })}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search GitHub username..."
          value={text}
          onChange={(event) => setText(event.target.value)}
          slotProps={{
            input: {
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start" sx={{ ml: 2 }}>
                  <SearchIcon sx={(theme) => ({ color: theme.palette.search.icon, fontSize: 36 })} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "#fff",
              py: 1.5,
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#fff",
              opacity: 0.7,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            minWidth: 100,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            px: 3,
            py: 1.5,
            backgroundColor: "#0079FF",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
