import { Typography } from "@mui/material";

type ResultElementTitleProps = {
  title: string;
};

export const ResultElementTitle = ({ title }: ResultElementTitleProps) => {
  return <Typography variant={"h2"}>{title}</Typography>;
};
