import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader } from "../components/molecules/PageHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github search app</title>
        <meta name="description" content="Github search app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <div>Hello Github</div>
    </>
  );
};

export default Home;
