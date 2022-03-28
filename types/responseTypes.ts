import { DataType } from "./DataType.enum";

export interface IUserListResult {
  dataType: DataType;
  avatar: string;
  name: string | null;
  nickName: string;
  bio: string | null;
  location: string | null;
  databaseId: number;
}

export interface IRepositoryListResult {
  dataType: DataType;
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
        color: string | null;
        name: string | null;
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
