// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  IRepositoryListResult,
  IUserListResult,
  SearchRequest,
} from "../../types";
import { IGithubRepResponse, SearchNode } from "../../types/GithubRepResponse";
import { DataType } from "../../types/DataType.enum";
import { IGithubUserResponse } from "../../types/GithubUserResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body: SearchRequest = req.body;

  const repData: IGithubRepResponse = await loadRepositories(body);
  const userData: IGithubUserResponse = await loadUsers(body);
  const repositoryAndUserArray: any[] = [];

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
        issuesCount: element.issues.totalCount,
      },
      databaseId: element.databaseId,
    };
    repositoryAndUserArray.push(tempObj);
  });

  repositoryAndUserArray.sort(function (a, b) {
    return a.databaseId - b.databaseId;
  });

  res.status(200).json(repositoryAndUserArray);
}
function loadRepositories(
  body: SearchRequest
): IGithubRepResponse | PromiseLike<IGithubRepResponse> {
  throw new Error("Function not implemented.");
}

function loadUsers(
  body: SearchRequest
): IGithubUserResponse | PromiseLike<IGithubUserResponse> {
  throw new Error("Function not implemented.");
}
