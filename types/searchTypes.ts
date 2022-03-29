import { SearchResponse } from "./responseTypes";
import { SearchRequest } from "./requestTypes";

export interface Search {
  search(request: SearchRequest): Promise<SearchResponse>;
}
