// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import { SearchRequest } from "../../types";

type Data = {
  name: string;
};

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
    numOfResults: 10,
  };

  const { data } = await client.query({
    query: LOAD_REPOSITORIES,
    variables: variablesRep,
  });

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body: SearchRequest = req.body;

  const repData = await loadRepositories(body);

  res.status(200).json(repData);
}
