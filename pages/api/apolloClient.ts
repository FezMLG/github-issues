import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { envConfig } from "../../envConfig";
import { SearchRequest, UserDetailsRequest } from "../../types";
import { DataType } from "../../types/DataType.enum";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";
import { LOAD_USER } from "./GraphQL/searchUser";
import { LOAD_USERS } from "./GraphQL/searchUsers";
import { IGithubRepResponse } from "../../types/GithubRepResponse";
import { IGithubUsersResponse } from "../../types/GithubUsersResponse";
import { IGithubUserResponse } from "../../types/GithubUserResponse";

enum Importance {
  High = -1,
  Low = 1,
}

const calcNumOfResults = (numOfResults: number, importance: Importance) => {
  if (numOfResults % 2 != 0) {
    numOfResults = (numOfResults - importance) / 2;
  }
  return numOfResults;
}

const generateVariables = (query: string, type: DataType, numOfResults: number) => {
  return {
    query: query,
    type: type,
    numOfResults: numOfResults,
  };
}

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

export const loadRepositories = async (body: SearchRequest): Promise<IGithubRepResponse> => {
  let numOfResults = calcNumOfResults(Number(body.perPage), Importance.High);
  const variables = generateVariables(body.inputString, DataType.REPOSITORY, numOfResults)

  const { data, error } = await client.query({
    query: LOAD_REPOSITORIES,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return data;
};

export const loadUsers = async (body: SearchRequest): Promise<IGithubUsersResponse> => {
  let numOfResults = calcNumOfResults(Number(body.perPage), Importance.Low);
  const variables = generateVariables(body.inputString, DataType.USER, numOfResults)

  const { data, error } = await client.query({
    query: LOAD_USERS,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return data;
};

export const loadUser = async (body: UserDetailsRequest): Promise<IGithubUserResponse> => {
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
