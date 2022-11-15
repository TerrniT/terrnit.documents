import React from 'react'
import { GithubButton, ThemeSwitcher } from '../atoms/button'
import Logo from './logo'
import Navlink from './navlink'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div>
        <Logo substr='portfolio' />
      </div>
      <div className='flex items-center gap-6'>
        <Navlink href='/about' title="about" />
        <Navlink href='/docs' title="docs" />
        <Navlink href='/contact' title="contact" />

        <GithubButton />
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
