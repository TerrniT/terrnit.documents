import React from "react";

interface Props {
  children: any;
}

const Container = ({ children }: Props) => {
  return (
    <section className="min-h-screen p-1 bg-dark-bg text-black dark:text-white dark:bg-dark-bg mx-auto max-w-6xl">
      {children}
    </section>
  );
};

export default Container;
