export interface IGithubUserResponse {
  search: SearchUser;
}

export interface SearchUser {
  pageInfo: PageInfo;
  nodes: Node[];
}

export interface UserNode {
  name: null;
  login: string;
  avatarUrl: string;
  followers: Followers;
  following: Followers;
  starredRepositories: Followers;
}

export interface Followers {
  totalCount: number;
}

export interface PageInfo {
  endCursor: string;
  startCursor: string;
}
