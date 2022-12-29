import React from "react";
import FakeInput from "./atoms/fakeInput";

const Hero = () => {
  return (
    <div className="backdrop-blur-md w-full h-[55vh] flex justify-center items-center my-auto">
      <div className="flex flex-col items-center justify-center w-2/4 ">
        <h3 className="dark:text-dark-acsent text-light-acsent font-medium text-center tracking-widest ">
          Documentation
        </h3>
        <h1 className="font-bold text-3xl text-center">
          Welcome to my resource storage{" "}
        </h1>
        <p className="hidden lg:inline md:inline mb-4 pt-4 text-center text-lg">
          As frontend developer i need so much resources keep in mind so i build
          this site to store all my resources. You can use all resources from my
          site as you like
        </p>
        <div className="mx-auto hidden lg:inline md:inline">
          <FakeInput />
        </div>
      </div>
    </div>
  );
};

export default Hero;
