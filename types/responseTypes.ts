import { DataType } from "./DataType.enum";

export interface IUserListResult {
  dataType: "USER";
  avatar: string;
  name: string | null;
  nickName: string;
  bio: string | null;
  location: string | null;
  databaseId: number;
}

export interface IRepositoryListResult {
  dataType: "REPOSITORY";
  nameWithOwner: string;
  description: string | null;
  url: string;
  details: {
    starGazersCount: number;
    updatedAt: string;
    issuesTotalCount: number;
    licenseInfoName: string | null;
    programmingLang: [
      {
        color: string | null;
        name: string | null;
      }
    ];
  };
  databaseId: number;
}

export interface IUserDetails {
  avatarLink: string;
  name: string | null;
  nickName: string;
  details: {
    followers: number;
    following: number;
    stars: number;
  };
}

export type SearchResult = IUserListResult | IRepositoryListResult;

export interface SearchResponse {
  metadata: {
    perPage: number;
    totalCount: number;
    //TODO: pagination
    pageInfo?: PageInfo;
  };
  result: SearchResult[];
}

export interface UserDetailsResponse {
  result: IUserDetails;
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}
