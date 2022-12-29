import React from "react";

import Image from "next/image";
import cat from "../assets/cat.png";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center mt-9 justify-center relative">
      <Image src={cat} alt="breadcat" />
      <h1 className="text-6xl font-bold text-light-acsent dark:text-dark-acsent absolute mx-auto ">
        404
      </h1>
      <h1 className="text-lg font-semibold text-zinc-600 mx-auto ">
        Page just disappear
      </h1>
      <h1 className="text-xs text-zinc-600 mx-auto">
        I'am currently working on this part
      </h1>
    </div>
  );
};

export default Notfound;
