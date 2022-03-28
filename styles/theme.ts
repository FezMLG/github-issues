import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    text: {
      primary: "#6F7781",
      secondary: "#fff",
    },
    grey: {
      ["300"]: "#6F7781",
      ["900"]: "#24292F",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey["900"],
        },
      },
    },
  },
});

export { theme };
