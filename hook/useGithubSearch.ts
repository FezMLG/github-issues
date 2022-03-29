import { useQuery } from "react-query";
import { SEARCH_RESULT_QUERY } from "../queryKeys";
import { MockSearch } from "../test/mockSearch";

const getSearchResult = () =>
  new MockSearch().search({ inputString: "abc", perPage: 1 });

export const useGithubSearch = () =>
  useQuery(SEARCH_RESULT_QUERY, getSearchResult);
