import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <a className="text-lg text-center flex" href="/">
      <span className="font-base">
        TerrniT.
      </span>
      <span className="self-center font-bold">{router.asPath.slice(1)}</span>
    </a>
  );
};

export default Logo;
