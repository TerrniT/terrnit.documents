import type { NextPage } from "next";
import Sceen from "../components/scene";

// Icons
import { IoMdDocument } from "react-icons/io"
import { BsGithub } from "react-icons/bs"

// Models
import { Cat } from "../components/models/Cat";
import { Bulbasaur } from "../components/models/Bulbasaur"
import Image from "next/image";

// Images
import ApolloSvg from "../public/ApolloLogo.svg"
import ShokoSvg from "../public/ShokoLogo.svg"

import Meta from "../components/meta/meta"
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />

      <main className="min-h-screen p-8 lg:p-32 bg-white">
        <Navbar />

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 w-full max-w-8xl mt-8 lg:mt-20">

          <div className="relative shadow-lg border-0 border-gray-200 bg-white rounded-md font-normal overflow-hidden">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center px-6">
                <div className="max-w-md">
                  <div className="pt-4 font-bold text-lg">Todo-list</div>
                  <div className="flex-grow pr-1 pt-1 pb-4 text-base text-gray-500 !leading-relaxed">React-three-fiber, ChakraUI </div>
                </div>
                <Sceen model={<Cat />} />
              </div>
              <div className="flex w-full border-t border-gray-200 divide-x divide-gray-200">
                <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors" href="https://three-todo.vercel.app">
                  <IoMdDocument />
                  <span className="sm:hidden">Demo</span>
                  <span className="hidden sm:inline">Live demo</span>
                </a>
                <a href="https://github.com/TerrniT/react-chakra-todo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative shadow-lg border-0 border-gray-200 bg-white rounded-md font-normal overflow-hidden">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center px-6">
                <div className="max-w-md">
                  <div className="pt-4 font-bold text-lg ">Random Pokemon</div>
                  <div className="flex-grow pr-1 pt-1 pb-4 text-base text-gray-500 !leading-relaxed">React-three-fiber, ChakraUI </div>
                </div>
                <Sceen model={<Bulbasaur />} />
              </div>
              <div className="flex w-full border-t border-gray-200 divide-x divide-gray-200">
                <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors" href="https://pokemon-randomizer.vercel.app">
                  <IoMdDocument />
                  <span className="sm:hidden">Demo</span>
                  <span className="hidden sm:inline">Live demo</span>
                </a>
                <a href="https://github.com/TerrniT/react-chakra-pokemon-randomizer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative shadow-lg border-0 border-gray-200 bg-apollo rounded-md font-normal overflow-hidden">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center px-6">
                <div className="max-w-md pt-6 text-light">
                  <div className=" pt-4 font-bold text-lg" >Apollo</div>
                  <div className="flex-grow pr-3 pt-1 pb-4 text-base text-gray-500 !leading-relaxed">Mobile Note-taking app</div>
                </div>

                <div className="relative flex-shrink-0 w-20 h-20 self-end">
                  <Image src={ApolloSvg} alt="logo" />
                </div>
              </div>

              <div className="flex w-full bg-light text-dark divide-x divide-white">
                <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors" target="_blank" rel="noopener noreferrer" href="">
                  <IoMdDocument />
                  <span className="sm:hidden">Soon</span>
                  <span className="hidden sm:inline">In Process</span>

                </a>

                <a href="https://github.com/TerrniT/Apollo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>


          <div className="relative shadow-lg border-0 border-gray-200 bg-shoko rounded-md font-normal overflow-hidden">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center px-6">
                <div className="max-w-md pt-6 text-light">
                  <div className=" pt-4 font-bold text-lg" >Shoko</div>
                  <div className="flex-grow w-1/2 pr-4 pt-1 pb-4 text-base text-gray-500 !leading-relaxed">Website for the development team</div>

                </div>
                <div className="relative flex-shrink-0 w-20 h-20 self-center">
                  <Image src={ShokoSvg} alt="logo" />
                </div>
              </div>

              <div className="flex w-full bg-light text-dark divide-x divide-white">
                <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors" target="_blank" rel="noopener noreferrer" href="">
                  <IoMdDocument />
                  <span className="sm:hidden">Soon</span>
                  <span className="hidden sm:inline">In Process</span>

                </a>

                <a href="https://github.com/TerrniT/Apollo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>


      </main >

      <footer>

      </footer>
    </div >
  );
};

export default Home;
