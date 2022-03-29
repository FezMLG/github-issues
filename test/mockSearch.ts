import {
  Search,
  SearchRequest,
  SearchResponse,
  SearchResult,
  IRepositoryListResult,
  IUserListResult,
} from "../types";
import { shuffle } from "lodash";

export class MockSearch implements Search {
  async search(request: SearchRequest): Promise<SearchResponse> {
    return {
      metadata: {
        perPage: 10,
        totalCount: 234,
      },
      result: this.generateResultItems(),
    };
  }

  private generateRepositories(index: number): IRepositoryListResult {
    return {
      dataType: "REPOSITORY",
      nameWithOwner: `user${index}/repository${index}`,
      url: `http://github.com/${index}`,
      description: `Very interesting description${index}`,
      databaseId: Math.random() * 1000,
      details: {
        starGazersCount: parseInt(`${Math.random() * 100}`),
        updatedAt: "2022-04-03T13:34",
        issuesTotalCount: parseInt(`${Math.random() * 10}`),
        licenseInfoName: `MIT ${index}`,
        programmingLang: [
          shuffle([
            { color: "red", name: "Typescript" },
            { color: null, name: null },
          ])[0],
        ],
      },
    };
  }

  private generateUsers(index: number): IUserListResult {
    return {
      avatar: "https://avatars.githubusercontent.com/u/46359181?v=4",
      name: shuffle([`User Like ${index}`, null])[0],
      nickName: `user${index}`,
      location: shuffle([`Warsaw`, null])[0],
      bio: shuffle([`Extra bio 🏠 ${index}`, null])[0],
      databaseId: Math.random() * 100,
      dataType: "USER",
    };
  }

  private generateResultItems(): SearchResult[] {
    const repositoryArray = [...Array(5)].map((_el, index) =>
      this.generateRepositories(index)
    );
    const userArray = [...Array(5)].map((_el, index) =>
      this.generateUsers(index)
    );

    return shuffle([...repositoryArray, ...userArray]);
  }
}
