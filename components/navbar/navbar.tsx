import React from 'react'
import GithubButton from '../atoms/button'
import Logo from './logo'
import Navlink from './navlink'

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-8">
      <Logo substr='portfolio' />
      <Navlink href='/about' title="about" />
      <Navlink href='/docs' title="docs" />
      <Navlink href='/contact' title="contact" />

      <button className=" ">Theme</button>
      <GithubButton />

    </nav>
  )
}

export default Navbar
