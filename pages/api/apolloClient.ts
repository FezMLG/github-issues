import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ParsedUrlQuery } from "querystring";
import { SearchRequest } from "../../types";
import { DataType } from "../../types/DataType.enum";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import { LOAD_USER } from "./GraphQL/searchUser";
import { LOAD_USERS } from "./GraphQL/searchUsers";

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_TOKEN;
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

export const loadRepositories = async (body: SearchRequest) => {
  const variables = {
    query: body.inputString,
    type: DataType.REPOSITORY,
    numOfResults: 10,
  };

  const { data } = await client.query({
    query: LOAD_REPOSITORIES,
    variables,
  });
  return data;
};

export const loadUsers = async (body: SearchRequest) => {
  const variables = {
    query: body.inputString,
    type: DataType.USER,
    numOfResults: 10,
  };

  const { data } = await client.query({
    query: LOAD_USERS,
    variables,
  });

  return data;
};

export const loadUser = async (body: any) => {
  const variables = {
    query: body.user,
    type: DataType.USER,
    numOfResults: 1,
  };

  const { data } = await client.query({
    query: LOAD_USER,
    variables,
  });

  return data;
};
