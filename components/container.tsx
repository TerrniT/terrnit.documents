import React from "react";

interface Props {
  children: any;
}

const Container = ({ children }: Props) => {
  return (
    <section className="min-h-screen p-1 text-black dark:text-white mx-auto my-14 max-w-6xl">
      {children}
    </section>
  );
};

export default Container;
