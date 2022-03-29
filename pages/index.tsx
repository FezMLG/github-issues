import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader } from "../components/molecules/PageHeader";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  IUserListResult,
  IRepositoryListResult,
  SearchResponse,
} from "../types";
import { ResultRepositoryListElement } from "../components/molecules/ResultRepositoryListElement";
import { ResultUserListElement } from "../components/molecules/ResultUserListElement";
import { Box, Container } from "@mui/material";
import { useGithubSearch } from "../hook";

type ServerSidePropsReturn = {
  data: SearchResponse;
};

const isRepository = (
  element: IUserListResult | IRepositoryListResult
): element is IRepositoryListResult => {
  return (element as IRepositoryListResult).dataType === "REPOSITORY";
};

const Home = () => {
  const { error, isLoading, isError, data } = useGithubSearch();
  return (
    <>
      <Head>
        <title>Github search app</title>
        <meta name="description" content="Github search app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <Container maxWidth={"lg"}>
        {data && data.items.length === 0 && "No result, sorry"}
        {data && data.items.length !== 0 && (
          <Box
            sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#24292F" }}
          >
            Lot of users & repositories
          </Box>
        )}
        {data &&
          data.items.length &&
          data.items.map((el) => {
            if (isRepository(el)) {
              return (
                <ResultRepositoryListElement element={el} key={el.databaseId} />
              );
            } else
              return <ResultUserListElement element={el} key={el.databaseId} />;
          })}
      </Container>
    </>
  );
};

export default Home;
