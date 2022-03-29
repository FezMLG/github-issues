export interface SearchRequest {
  inputString: string;
  perPage: number;
  //TODO: pagination
  pageInfo?: {
    startCursor: string;
    endCursor: string;
  };
}

export interface UserDetailsRequest {
  userNickname: string;
}
