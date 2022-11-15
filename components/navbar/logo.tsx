import React from 'react'

interface Props {
  substr: string
}

const Logo = ({ substr }: Props) => {
  return (
    <a className="p-2 block text-3xl text-center lg:text-left" href="/">
      <span className="font-bold">Terrnit</span>
      <span className="font-normal">.{substr}</span>
    </a>
  )
}

export default Logo
