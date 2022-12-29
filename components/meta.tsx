import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Meta = () => {
  const router = useRouter();
  return (
    <Head>
      <title>terrnit.{router.pathname.slice(1)}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
