import type { NextApiRequest, NextApiResponse } from "next";
import {
  ErrorResponse,
  IRepositoryListResult,
  IUserListResult,
  SearchRequest,
  SearchResponse,
  SearchResult,
} from "../../types";
import { IGithubRepResponse, SearchNode } from "../../types/GithubRepResponse";
import { DataType } from "../../types/DataType.enum";
import { IGithubUsersResponse } from "../../types/GithubUsersResponse";
import { loadRepositories, loadUsers } from "./apolloClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[] | ErrorResponse>
) {
  const body: SearchRequest = req.body;
  const repositoryAndUserArray: SearchResult[] = [];

  try {
    const repData: IGithubRepResponse = await loadRepositories(body);
    repData.search.nodes.forEach((element: SearchNode) => {
      const tempObj: IRepositoryListResult = {
        dataType: DataType.REPOSITORY,
        nameWithOwner: element.nameWithOwner,
        description: element?.description || null,
        url: element.url,
        details: {
          starGazersCount: element.stargazers.totalCount,
          updatedAt: element.updatedAt,
          issuesTotalCount: element.issues.totalCount,
          licenseInfoName: element.licenseInfo?.name || null,
          programmingLang: [
            {
              color: element.languages.nodes[0]?.color || null,
              name: element.languages.nodes[0]?.name || null,
            },
          ],
        },
        databaseId: element.databaseId,
      };
      repositoryAndUserArray.push(tempObj);
    });
  } catch (err) {
    res.status(500).send({
      errorCode: 500,
      errorMessage: "Problem with fetching repositories",
    });
  }

  try {
    const userData: IGithubUsersResponse = await loadUsers(body);

    userData.search.nodes.forEach((element: any) => {
      const tempObj: IUserListResult = {
        dataType: DataType.USER,
        avatar: element.avatarUrl,
        name: element?.name || null,
        nickName: element.login,
        bio: element?.bio || null,
        location: element?.location || null,
        databaseId: element.databaseId,
      };
      repositoryAndUserArray.push(tempObj);
    });
  } catch (err) {
    res.status(500).send({
      errorCode: 500,
      errorMessage: "Problem with fetching users",
    });
  }

  repositoryAndUserArray.sort(function (a, b) {
    return a.databaseId - b.databaseId;
  });

  res.status(200).json(repositoryAndUserArray);
}
