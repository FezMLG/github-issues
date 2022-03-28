import { gql } from "@apollo/client";

export const LOAD_REPOSITORIES = gql`
  query ($query: String!, $type: SearchType!, $numOfResults: Int!) {
    search(type: $type, query: $query, first: $numOfResults) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          nameWithOwner
          description
          stargazers {
            totalCount
          }
          url
          updatedAt
          licenseInfo {
            name
          }
          issues {
            totalCount
          }
          databaseId
        }
      }
    }
  }
`;
