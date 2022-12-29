import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: Props) => {
  return <main className="bg-light-bg dark:bg-dark-bg ">{children}</main>;
};

export default Main;
