export interface IGithubUserResponse {
  search: Search;
}

export interface Search {
  __typename: string;
  pageInfo: PageInfo;
  nodes: Node[];
}

export interface SearchUserNode {
  __typename: string;
  name: string;
  login: string;
  bio: string;
  location: null | string;
  avatarUrl: string;
}

export interface PageInfo {
  __typename: string;
  hasNextPage: boolean;
  endCursor: string;
}
