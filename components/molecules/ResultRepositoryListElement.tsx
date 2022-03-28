import { IRepositoryListResult } from "../../types";
import { ResultListElementWrapper } from "./ResultListElementWrapper";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Box, Typography } from "@mui/material";
import { RepositoryDetails } from "./RespositoryDetails";
import { ResultElementTitle } from "../atoms/ResultElementTitle";

type ResultRepositoryListElementProps = {
  element: IRepositoryListResult;
};

export const ResultRepositoryListElement = ({
  element,
}: ResultRepositoryListElementProps) => {
  return (
    <ResultListElementWrapper
      avatar={
        <Box sx={{ fontSize: "20px" }}>
          <FolderOpenIcon fontSize="inherit" />
        </Box>
      }
      title={<ResultElementTitle title={element.nameWithOwner} />}
      body={
        <Box>
          <Typography>{element.description}</Typography>
        </Box>
      }
      footer={<RepositoryDetails details={{ details: element.details }} />}
    />
  );
};
