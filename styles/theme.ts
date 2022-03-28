import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    text: {
      primary: "#6F7781",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
  },
});

export { theme };
