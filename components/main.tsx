import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: Props) => {
  return <main className="w-49">{children}</main>;
};

export default Main;
