import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  title: string;
  onClick?: () => void;
}

const Navlink = ({ href, title, ...props }: Props) => {
  return (
    <Link
      href={href}
      className="block text-left py-1 mx-3 md:hidden lg:block"
      {...props}
    >
      <span className="font-medium text-black text-xs uppercase dark:text-white hover:border-b-2 hover:border-light-acsent  hover:transition-all hover:text-light-acsent dark:hover:text-dark-acsent dark:hover:border-dark-acsent">
        {title}
      </span>
    </Link>
  );
};

export default Navlink;
