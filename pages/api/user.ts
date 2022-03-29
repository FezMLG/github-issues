import { NextApiRequest, NextApiResponse } from "next";
import { IUserDetails } from "../../types";
import { IGithubUserResponse } from "../../types/GithubUserResponse";
import { loadUser } from "./apolloClient";
import { userSchema } from "./validation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const userArray: any[] = [];

  const { error, value } = userSchema.validate(query);
  if (error) {
    res.status(400).send({
      errorCode: 400,
      errorMessage: String(error),
    });
  }

  try {
    const userData: IGithubUserResponse = await loadUser(value);

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
