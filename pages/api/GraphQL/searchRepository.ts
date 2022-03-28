import { gql } from "@apollo/client";

export const LOAD_REPOSITORIES = gql`
search($query: String!, $type: SearchType!, $numOfResults: Int!, $nextPageCursor: String) {
  search(type: $type, query: $query, first: 10) {
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
