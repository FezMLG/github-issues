export interface IGithubUsersResponse {
  search: Search;
}

export interface Search {
  __typename: string;
  pageInfo: PageInfo;
  nodes: Node[];
  userCount: number;
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
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}
