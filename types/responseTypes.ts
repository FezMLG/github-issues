export interface IUserListResult {
  avatar: string;
  name: string;
  nickName: string;
  bio: string;
  location: string;
}

export interface IRepositoryListResult {
  nameWithOwner: string;
  description: string;
  url: string;
  details: {
    starGazersCount: number;
    updatedAt: Date;
    issuesTotalCount: number;
    licenseInfoName: string;
  };
}

export interface IUserDetails {
  avatarLink: string;
  name: string;
  nickName: string;
  details: {
    followers: number;
    following: number;
  };
}

export type SearchResult = IUserListResult | IRepositoryListResult;

export interface SearchResponse {
  pageNumber: number;
  result: SearchResult[];
}

export interface UserDetailsResponse {
  result: IUserDetails;
}
