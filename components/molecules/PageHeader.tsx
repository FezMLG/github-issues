import { AppBar as MuiAppBar, Box, Container, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SearchForm } from "./SearchForm";

export const PageHeader = () => {
  return (
    <MuiAppBar position="static" sx={{ p: "20px", marginBottom: "2rem" }}>
      <Container maxWidth={"xl"}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
          <SearchForm />
        </Stack>
      </Container>
    </MuiAppBar>
  );
};
