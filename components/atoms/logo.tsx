import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <a className="text-lg text-center " href="/">
      <p className="font-base flex relative">
        TerrniT.<a className="font-bold">{router.asPath.slice(1)}</a>
      </p>
    </a>
  );
};

export default Logo;
