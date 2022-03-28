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
    h2: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "1.5",
      color: theme.palette.primary.main,
    },
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
