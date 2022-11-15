import React from 'react'
import { useTheme } from "next-themes"
import { VscGithub } from "react-icons/vsc"
import { BiMoon } from "react-icons/bi"
import { ImSun } from "react-icons/im"
import Link from 'next/link'

export const GithubButton = () => {
  return (
    <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded">
      <Link href='https://github.com/terrnit' >
        <VscGithub className='w-7 h-7' />
      </Link>
    </button>

  )
}


export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme == 'system' ? systemTheme : theme;
  if (currentTheme == 'dark') {
    return (
      <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded" onClick={() => setTheme('light')} >
        <BiMoon className='w-7 h-7' />
      </button>
    )
  } else {
    return (
      <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded" onClick={() => setTheme('dark')} >
        <ImSun className='w-7 h-7' />
      </button>
    )
  }
}

