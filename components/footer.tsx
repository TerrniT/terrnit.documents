import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-row justify-center">
      <div className="flex gap-3 text-zinc-400">
        <a
          className="font-bold hover:text-light-acsent hover:dark:text-dark-acsent transition-colors"
          href="https://github.com/terrnit"
        >
          Terrnit©
        </a>
        <h3> 2022 All Rights Reversed</h3>
      </div>
    </footer>
  );
};

export default Footer;
