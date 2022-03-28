import { NextApiRequest, NextApiResponse } from "next";
import { IUserDetails } from "../../types";
import { IGithubUserResponse } from "../../types/GithubUserResponse";
import { loadUser } from "./apolloClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const userArray: any[] = [];

  try {
    const userData: IGithubUserResponse = await loadUser(body);

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
  } catch (error) {
    res.status(500).send({ message: "Problem with fetching user data" });
  }

  res.status(200).send(userArray);
}
