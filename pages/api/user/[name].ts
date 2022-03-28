import { NextApiResponse } from "next";
import { NextRouter } from "next/router";
import { IUserDetails } from "../../../types";
import { IGithubUserResponse } from "../../../types/GithubUserResponse";
import { loadUser } from "../apolloClient";

export default async function userHandler(
  { query: { user } }: any,
  res: NextApiResponse
) {
  user = "yesy";

  const userData: IGithubUserResponse = await loadUser(user);

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
