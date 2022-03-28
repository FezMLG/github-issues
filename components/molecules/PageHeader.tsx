import { AppBar as MuiAppBar, Box, TextField, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@mui/styled-engine";

export const PageHeader = () => {
  return (
    <MuiAppBar position="static" sx={{ p: "20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            fontSize: "45px",
            p: 0,
            m: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GitHubIcon fontSize="inherit" />
        </Box>
        <TextField
          size="small"
          variant="outlined"
          sx={{
            input: {
              color: "white",
            },
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)",
              color: "white",
            },
          }}
        />
      </Stack>
    </MuiAppBar>
  );
};
