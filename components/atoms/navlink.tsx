import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  title: string;
}

const Navlink = ({ href, title }: Props) => {
  return (
    <Link href={href} className=" p-2 block text-1xl text-center lg:text-left">
      <span className="font-medium text-white hover:border-b-2 hover:border-light-acsent  hover:transition-all hover:text-light-acsent dark:hover:text-dark-acsent dark:hover:border-dark-acsent">
        {title}
      </span>
    </Link>
  );
};

export default Navlink;
