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

type ServerSidePropsReturn = {
  data: SearchResponse;
};

export const getServerSideProps: GetServerSideProps<ServerSidePropsReturn> = async (
  contex
) => {
  const mockData: SearchResponse = {
    pageNumber: 1,
    result: [
      {
        dataType: "USER",
        avatar: "https://avatars.githubusercontent.com/u/38321?s=40&v=4",
        name: "Gleicon Moraes",
        nickName: "gleicon",
        bio: "the dog ate my readme",
        location: "Sao Paulo/Brazil",
        databaseId: 38321,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "github/markup",
        description:
          "Determines which markup library to use to render a content file (e.g. README) on GitHub",
        url: "https://github.com/github/markup",
        details: {
          starGazersCount: 5391,
          updatedAt: "2022-03-25T18:38:40Z",
          issuesTotalCount: 914,
          licenseInfoName: "MIT License",
          programmingLang: [
            {
              color: "#701516",
              name: "Ruby",
            },
          ],
        },
        databaseId: 355893,
      },
      {
        dataType: "USER",
        avatar: "https://avatars.githubusercontent.com/u/1941305?s=40&v=4",
        name: "Cornelius Schmale",
        nickName: "readme42",
        bio: "get shit done :)",
        location: "Munich, Germany",
        databaseId: 1941305,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/2001025?s=40&u=01eb202228c8c0c3e992531bf8e3531b6e3f0384&v=4",
        name: "Pavel Kalashnikov",
        nickName: "kalashnikovisme",
        bio: "just look at readme  ",
        location: "Ulyanovsk",
        databaseId: 2001025,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/6719062?s=40&u=80bab6bed84e951299fec3a3ca0b48b2e6bc537a&v=4",
        name: "Martín Carrera",
        nickName: "martincarrera",
        bio: "Ninja README.md updater.",
        location: null,
        databaseId: 6719062,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/15367484?s=40&u=3fe94b42c9beca7babf4912557312ed613748926&v=4",
        name: null,
        nickName: "ReadmeCritic",
        bio: "👀🔎",
        location: null,
        databaseId: 15367484,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "guodongxiaren/README",
        description: "README文件语法解读，即Github Flavored Markdown语法介绍",
        url: "https://github.com/guodongxiaren/README",
        details: {
          starGazersCount: 5930,
          updatedAt: "2022-03-28T09:56:07Z",
          issuesTotalCount: 40,
          licenseInfoName: "The Unlicense",
          programmingLang: [
            {
              color: null,
              name: null,
            },
          ],
        },
        databaseId: 20849413,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "mogutt/README",
        description: "蘑菇街开源的一款企业办公即时通信软件",
        url: "https://github.com/mogutt/README",
        details: {
          starGazersCount: 524,
          updatedAt: "2022-03-14T08:58:16Z",
          issuesTotalCount: 5,
          licenseInfoName: null,
          programmingLang: [
            {
              color: null,
              name: null,
            },
          ],
        },
        databaseId: 24315286,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/26366288?s=40&u=44d18a3977e498cf041309ed4238c7b2b944ed07&v=4",
        name: "Rishi Kumar Chawda",
        nickName: "rishichawda",
        bio: "Read the README 👌  👉",
        location: "Bangalore",
        databaseId: 26366288,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/28653235?s=40&u=d5f53dcbe6b798a6fa9fac2730ef184f92158c93&v=4",
        name: "Liu Wenyuan",
        nickName: "Dobby233Liu",
        bio: "Reviewing stuff I see. Read the README.",
        location: "Chaozhou, Guangdong, China",
        databaseId: 28653235,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "matiassingers/awesome-readme",
        description: "A curated list of awesome READMEs",
        url: "https://github.com/matiassingers/awesome-readme",
        details: {
          starGazersCount: 11517,
          updatedAt: "2022-03-28T06:04:05Z",
          issuesTotalCount: 27,
          licenseInfoName: null,
          programmingLang: [
            {
              color: null,
              name: null,
            },
          ],
        },
        databaseId: 29456624,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/35302948?s=40&u=b09442763c98ed51b1af37426979e46e8c4ce510&v=4",
        name: "README Bot",
        nickName: "codetriage-readme-bot",
        bio:
          "Bleep bloop. I am a bot, but all my pull requests are human initiated and generated. I manage the flow of submitting pull requests to READMEs",
        location: null,
        databaseId: 35302948,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "RichardLitt/standard-readme",
        description: "A standard style for README files",
        url: "https://github.com/RichardLitt/standard-readme",
        details: {
          starGazersCount: 4635,
          updatedAt: "2022-03-28T11:04:46Z",
          issuesTotalCount: 79,
          licenseInfoName: "MIT License",
          programmingLang: [
            {
              color: "#89e051",
              name: "Shell",
            },
          ],
        },
        databaseId: 44409210,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "dbader/readme-template",
        description: "README.md template for your open-source project",
        url: "https://github.com/dbader/readme-template",
        details: {
          starGazersCount: 1715,
          updatedAt: "2022-03-28T08:49:15Z",
          issuesTotalCount: 6,
          licenseInfoName: null,
          programmingLang: [
            {
              color: null,
              name: null,
            },
          ],
        },
        databaseId: 51907555,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/68110106?s=40&u=162bfcfb2fe4cad67a19949b6964c972bbd82320&v=4",
        name: "dkatsios",
        nickName: "dk-raw",
        bio: "@dotnet developer, () => {  return readMe('dkatsios') }",
        location: "Athens, Attica, Greece",
        databaseId: 68110106,
      },
      {
        dataType: "USER",
        avatar:
          "https://avatars.githubusercontent.com/u/72583144?s=40&u=cca93572eb392612ddc2ae156aa014abb18f7c26&v=4",
        name: "Oluchi Nwenyi",
        nickName: "LuluNwenyi",
        bio: "readme?",
        location: "Lagos, Nigeria",
        databaseId: 72583144,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "othneildrew/Best-README-Template",
        description: "An awesome README template to jumpstart your projects! ",
        url: "https://github.com/othneildrew/Best-README-Template",
        details: {
          starGazersCount: 5705,
          updatedAt: "2022-03-28T11:37:06Z",
          issuesTotalCount: 16,
          licenseInfoName: "MIT License",
          programmingLang: [
            {
              color: null,
              name: null,
            },
          ],
        },
        databaseId: 161215159,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "kautukkundan/Awesome-Profile-README-templates",
        description:
          "A collection of awesome readme templates to display on your profile",
        url: "https://github.com/kautukkundan/Awesome-Profile-README-templates",
        details: {
          starGazersCount: 8949,
          updatedAt: "2022-03-28T06:08:18Z",
          issuesTotalCount: 28,
          licenseInfoName: null,
          programmingLang: [
            {
              color: "#f1e05a",
              name: "JavaScript",
            },
          ],
        },
        databaseId: 278296523,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "anuraghazra/github-readme-stats",
        description:
          ":zap: Dynamically generated stats for your github readmes",
        url: "https://github.com/anuraghazra/github-readme-stats",
        details: {
          starGazersCount: 39236,
          updatedAt: "2022-03-28T11:43:42Z",
          issuesTotalCount: 664,
          licenseInfoName: "MIT License",
          programmingLang: [
            {
              color: "#f1e05a",
              name: "JavaScript",
            },
          ],
        },
        databaseId: 278335273,
      },
      {
        dataType: "REPOSITORY",
        nameWithOwner: "abhisheknaiidu/awesome-github-profile-readme",
        description: "😎 A curated list of awesome GitHub Profile READMEs 📝",
        url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme",
        details: {
          starGazersCount: 11595,
          updatedAt: "2022-03-28T11:33:22Z",
          issuesTotalCount: 49,
          licenseInfoName: "Creative Commons Zero v1.0 Universal",
          programmingLang: [
            {
              color: "#41b883",
              name: "Vue",
            },
          ],
        },
        databaseId: 279064706,
      },
    ],
  };
  return {
    props: {
      data: mockData,
    },
  };
};

const isRepository = (
  element: IUserListResult | IRepositoryListResult
): element is IRepositoryListResult => {
  return (element as IRepositoryListResult).dataType === "REPOSITORY";
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Github search app</title>
        <meta name="description" content="Github search app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <Container maxWidth={"lg"}>
        {data.result.length === 0 && "No result, sorry"}
        {data.result.length !== 0 && (
          <Box
            sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#24292F" }}
          >
            Lot of users & repositories
          </Box>
        )}
        {data.result.length &&
          data.result.map((el) => {
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
