export interface IGithubRepResponse {
  search: Search;
}

interface Search {
  __typename: string;
  pageInfo: PageInfo;
  nodes: SearchNode[];
}

export interface SearchNode {
  __typename: string;
  nameWithOwner: string;
  description: string;
  stargazers: Issues;
  url: string;
  updatedAt: Date;
  licenseInfo: LicenseInfo;
  issues: Issues;
  databaseId: number;
  languages: Languages;
}

interface Issues {
  __typename: string;
  totalCount: number;
}

interface Languages {
  __typename: string;
  nodes: LanguagesNode[];
}

interface LanguagesNode {
  __typename: string;
  name: string;
  color: string;
}

interface LicenseInfo {
  __typename: string;
  name: string | null;
}

interface PageInfo {
  __typename: string;
  hasNextPage: boolean;
  endCursor: string;
}
