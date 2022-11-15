import React from 'react'

import { IoMdDocument } from "react-icons/io"
import { BsGithub } from "react-icons/bs"
import Scene from '../scene'
import { Cat } from '../models/Cat'

const ProjectItem = () => {
  return (
    < div className="relative shadow-lg border-0 border-gray-200 rounded-md font-normal overflow-hidden" >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center px-6">
          <div className="max-w-md">
            <div className="pt-4 font-bold text-lg">Todo-list</div>
            <div className="flex-grow pr-1 pt-1 pb-4 text-base text-gray-500 !leading-relaxed">React-three-fiber, ChakraUI </div>
          </div>
          <Scene model={<Cat />} />
        </div>
        <div className="flex w-full border-t border-gray-200 divide-x divide-gray-200">
          <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 hover:text-black transition-colors" href="https://three-todo.vercel.app">
            <IoMdDocument />
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Live demo</span>
          </a>
          <a className="inline-flex items-center space-x-2 w-1/2 px-6 py-4 hover:bg-gray-50 hover:text-black transition-colors" href="https://github.com/TerrniT/react-chakra-todo" target="_blank" rel="noopener noreferrer">
            <BsGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div >
  )
}

export default ProjectItem
