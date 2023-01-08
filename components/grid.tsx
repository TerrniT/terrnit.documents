import React from "react";

interface Props {
  children: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className="flex flex-wrap gap-4 mt-10 ">{children}</div>;
};
export default Grid;
