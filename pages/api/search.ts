// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import {
  IRepositoryListResult,
  IUserListResult,
  SearchRequest,
} from "../../types";
import { IGithubRepResponse, SearchNode } from "../../types/GithubRepResponse";
import { DataType } from "../../types/DataType.enum";
import { LOAD_USERS } from "./GraphQL/searchUsers";
import {
  IGithubUserResponse,
  Search,
  SearchUserNode,
} from "../../types/GithubUserResponse";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.GITHUB_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const loadRepositories = async (body: SearchRequest) => {
  const variables = {
    query: body.inputString,
    type: DataType.REPOSITORY,
    numOfResults: 2,
  };

  const { data } = await client.query({
    query: LOAD_REPOSITORIES,
    variables,
  });

  return data;
};

const loadUsers = async (body: SearchRequest) => {
  const variables = {
    query: body.inputString,
    type: DataType.USER,
    numOfResults: 2,
  };

  const { data } = await client.query({
    query: LOAD_USERS,
    variables,
  });

  return data;
};

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
      name: element.name,
      nickName: element.login,
      bio: element.bio,
      location: element.location,
    };
    repositoryAndUserArray.push(tempObj);
  });

  repData.search.nodes.forEach((element: SearchNode) => {
    const tempObj: IRepositoryListResult = {
      dataType: DataType.REPOSITORY,
      nameWithOwner: element.nameWithOwner,
      description: element.description,
      url: element.url,
      details: {
        starGazersCount: element.stargazers.totalCount,
        updatedAt: element.updatedAt,
        issuesTotalCount: element.issues.totalCount,
        licenseInfoName: element.licenseInfo.name,
        programmingLang: [
          {
            color: element.languages.nodes[0]?.color || null,
            name: element.languages.nodes[0]?.name || null,
          },
        ],
        issuesCount: element.issues.totalCount,
      },
      databaseId: 0,
    };
    repositoryAndUserArray.push(tempObj);
  });

  res.status(200).json(repositoryAndUserArray);
}
