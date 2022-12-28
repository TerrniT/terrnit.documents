import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  title: string;
}

const Navlink = ({ href, title }: Props) => {
  return (
    <Link href={href} className="block text-1xl text-right ">
      <span className="font-medium text-black dark:text-white hover:border-b-2 hover:border-light-acsent  hover:transition-all hover:text-light-acsent dark:hover:text-dark-acsent dark:hover:border-dark-acsent">
        {title}
      </span>
    </Link>
  );
};

export default Navlink;
