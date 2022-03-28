export interface IUserListResult {
  avatar: string;
  name: string;
  nickName: string;
  bio: string;
  location: string;
}

export interface IRepositoryListResult {
  nameWithOwner: string;
  description: string | null;
  url: string;
  details: {
    starGazersCount: number;
    updatedAt: Date;
    issuesTotalCount: number;
    licenseInfoName: string | null;
    programmingLang: [
      {
        color: string;
        name: string;
      }
    ];
    issuesCount: number;
  };
  databaseId: number;
}

export interface IUserDetails {
  avatarLink: string;
  name: string;
  nickName: string;
  details: {
    followers: number;
    following: number;
  };
  databaseId: number;
}

export type SearchResult = IUserListResult | IRepositoryListResult;

export interface SearchResponse {
  pageNumber: number;
  result: SearchResult[];
}

export interface UserDetailsResponse {
  result: IUserDetails;
}
