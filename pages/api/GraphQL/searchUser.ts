import { gql } from "@apollo/client";

export const LOAD_USER = gql`
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
          avatarUrl(size: 296)
          followers {
            totalCount
          }
          following {
            totalCount
          }
          starredRepositories {
            totalCount
          }
        }
      }
    }
  }
`;
