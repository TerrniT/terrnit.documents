import React from 'react'
import { VscGithub } from "react-icons/vsc"

const GithubButton = () => {
  return (
    <div className="flex justify-center items-center bg-gray-700 hover:bg-gray-500 text-white font-bold py-0 px-6 rounded">
      <VscGithub className="w-[20px] h-[20px]" />
      <a href='https://github.com/terrnit' className="ml-2 text-base">Github</a>
    </div>

  )
}

const IconButton = () => {
  return (
    <div>Something</div>
  )
}

export default GithubButton
