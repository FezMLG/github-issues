import { Box, Divider, Stack } from "@mui/material";
import * as React from "react";

type ResultListElementWrapperProps = {
  avatar: JSX.Element | string;
  title: JSX.Element;
  body: JSX.Element;
  footer: JSX.Element | null;
};

export const ResultListElementWrapper = ({
  title,
  body,
  footer,
  avatar,
}: ResultListElementWrapperProps) => {
  return (
    <>
      <Divider />
      <Stack direction={"row"} alignItems="flex-start" sx={{ p: "16px" }}>
        <Box sx={{ width: "30px", flexShrink: 0 }}>{avatar}</Box>
        <Box>
          {title}
          {body}
          {footer}
        </Box>
      </Stack>
    </>
  );
};
