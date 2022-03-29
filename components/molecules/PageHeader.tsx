import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@mui/styled-engine";
import { FormWrapper } from "./Form.wrapper";
import SearchIcon from "@mui/icons-material/Search";

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
          <FormWrapper>
            <FormGroup row>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search"
                sx={{
                  input: {
                    color: "white",
                  },
                  "& fieldset.MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    color: "white",
                  },
                  "& fieldset": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Search
              </Button>
            </FormGroup>
          </FormWrapper>
        </Stack>
      </Container>
    </MuiAppBar>
  );
};
