import { IUserListResult } from "../../types";
import { ResultListElementWrapper } from "./ResultListElementWrapper";
import { Avatar, Typography } from "@mui/material";
import { ResultElementTitle } from "../atoms/ResultElementTitle";
type ResultUserListElementProps = {
  element: IUserListResult;
};

export const ResultUserListElement = ({
  element,
}: ResultUserListElementProps) => {
  const isBio = element.bio !== null;
  return (
    <ResultListElementWrapper
      avatar={
        <Avatar
          alt={element.nickName}
          src={element.avatar}
          sx={{ width: "20px", height: "20px" }}
        />
      }
      title={<ResultElementTitle title={element.name || element.nickName} />}
      body={<Typography>{element.nickName}</Typography>}
      footer={isBio ? <Typography>{element.bio}</Typography> : null}
    />
  );
};
