import { Box, Stack } from "@mui/material";

type FormWrapperProps = {
  children: JSX.Element[] | JSX.Element;
};

export const FormWrapper = ({ children }: FormWrapperProps) => (
  <Box component={"form"} autoComplete={"off"} noValidate>
    <Stack direction={"row"}>{children}</Stack>
  </Box>
);
