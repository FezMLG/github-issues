import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query ($query: String!, $type: SearchType!, $numOfResults: Int!) {
    search(type: $type, query: $query, first: $numOfResults) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on User {
          name
          login
          bio
          location
          avatarUrl(size: 40)
          databaseId
        }
      }
      userCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
