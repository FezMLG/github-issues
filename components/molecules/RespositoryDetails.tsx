import { Box, Stack } from "@mui/material";
import { IRepositoryListResult } from "../../types";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type RepositoryDetails = Pick<IRepositoryListResult, "details">;

type RepositoryDetailsProps = {
  details: RepositoryDetails;
};

export const RepositoryDetails = ({ details }: RepositoryDetailsProps) => {
  const { details: repositoryDetails } = details;
  const areStarsGazers = repositoryDetails.starGazersCount !== 0;
  const areProgrammingLang =
    repositoryDetails.programmingLang[0].color !== null;
  return (
    <Stack direction={"row"}>
      {areStarsGazers && (
        <Stack direction={"row"}>
          <StarBorderIcon /> {repositoryDetails.starGazersCount}
        </Stack>
      )}
      {areProgrammingLang !== null && (
        <Stack direction={"row"} alignItems={"center"}>
          <Box
            sx={{ backgroundColor: repositoryDetails.programmingLang[0].color }}
            width="15px"
            height="15px"
            borderRadius={"50%"}
            marginRight={"5px"}
          ></Box>
          {repositoryDetails.programmingLang[0].name}
        </Stack>
      )}
      <Stack direction={"row"} alignItems={"center"}>
        Updated on {repositoryDetails.updatedAt}
      </Stack>
    </Stack>
  );
};
