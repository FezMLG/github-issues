// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LOAD_REPOSITORIES } from "./GraphQL/searchRepository";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: LOAD_REPOSITORIES,
  });

  res.status(200).json(data);
}
