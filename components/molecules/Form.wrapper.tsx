import { Box, Stack } from "@mui/material";

type FormWrapperProps = {
  children: JSX.Element[] | JSX.Element;
  onSubmit: () => void;
};

export const FormWrapper = ({ children, onSubmit }: FormWrapperProps) => (
  <Box
    component={"form"}
    autoComplete={"off"}
    noValidate
    onSubmit={() => onSubmit()}
  >
    <Stack direction={"row"}>{children}</Stack>
  </Box>
);
