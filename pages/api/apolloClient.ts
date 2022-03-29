import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { envConfig } from "../../envConfig";
import { SearchRequest, UserDetailsRequest } from "../../types";
import { DataType } from "../../types/DataType.enum";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import { LOAD_USER } from "./GraphQL/searchUser";
import { LOAD_USERS } from "./GraphQL/searchUsers";

const authLink = setContext((_, { headers }) => {
  const token = envConfig.githubKey;
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

  const { data, error } = await client.query({
    query: LOAD_REPOSITORIES,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return data;
};

export const loadUsers = async (body: SearchRequest) => {
  const variables = {
    query: body.inputString,
    type: DataType.USER,
    numOfResults: 10,
  };

  const { data, error } = await client.query({
    query: LOAD_USERS,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return data;
};

export const loadUser = async (body: UserDetailsRequest) => {
  const variables = {
    query: body.userNickname,
    type: DataType.USER,
    numOfResults: 1,
  };

  const { data, error } = await client.query({
    query: LOAD_USER,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return data;
};
