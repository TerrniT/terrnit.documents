import React from "react";

interface Props {
  substr: string;
}

const Logo = ({ substr }: Props) => {
  return (
    <a className="text-lg text-center " href="/">
      <p className="font-base flex relative">
        TerrniT.<a className="font-bold">{substr}</a>
      </p>
    </a>
  );
};

export default Logo;
