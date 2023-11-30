import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Paper,
  InputAdornment,
  useTheme,
  styled,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: `${theme.spacing(5)} auto`,
  maxWidth: 600,
  borderRadius: "20px",
  boxShadow: theme.shadows[7],
}));

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const theme = useTheme();

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <StyledPaper component="form">
        <TextField
          fullWidth
          label="Buscar cidade"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "20px",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
                borderRadius: "20px",
              },
            },
            "& .MuiInputLabel-root": {
              color: theme.palette.text.secondary,
              "&.Mui-focused": {
                color: theme.palette.primary.main,
              },
            },
          }}
        />
      </StyledPaper>
    </>
  );
};

export default SearchBar;
