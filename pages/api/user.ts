import { NextApiRequest, NextApiResponse } from "next";
import { IUserDetails, SearchRequest } from "../../types";
import { DataType } from "../../types/DataType.enum";
import { IGithubUserResponse, UserNode } from "../../types/GithubUserResponse";
import { loadUser } from "./apolloClient";
import { NextRouter, useRouter } from "next/router";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  console.log(body);

  const userData: IGithubUserResponse = await loadUser(body);

  const userArray: any[] = [];

  userData.search.nodes.forEach((element: any) => {
    const tempObj: IUserDetails = {
      avatarLink: element.avatarUrl,
      name: element?.name || null,
      nickName: element.login,
      details: {
        followers: element.followers.totalCount,
        following: element.following.totalCount,
        stars: element.starredRepositories.totalCount,
      },
    };
    userArray.push(tempObj);
  });

  res.status(200).send(userArray);
}
