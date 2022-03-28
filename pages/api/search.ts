// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import { IRepositoryListResult, SearchRequest } from "../../types";
import { IGithubRepResponse, SearchNode } from "../../types/GithubResponses";

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
  const variablesRep = {
    query: body.inputString,
    type: "REPOSITORY",
    numOfResults: 2,
  };

  const { data } = await client.query({
    query: LOAD_REPOSITORIES,
    variables: variablesRep,
  });

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body: SearchRequest = req.body;

  const repData: IGithubRepResponse = await loadRepositories(body);
  const repositoryAndUserArray: any[] = [];

  repData.search.nodes.forEach((element: SearchNode) => {
    const tempObj: IRepositoryListResult = {
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
            color: element.languages.nodes[0].color,
            name: element.languages.nodes[0].name,
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
