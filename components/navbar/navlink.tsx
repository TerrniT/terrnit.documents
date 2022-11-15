import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  title: string
}

const Navlink = ({ href, title }: Props) => {
  return (
    <Link href={href} className="p-2 block text-2xl text-center lg:text-left">
      <span className="font-normal hover:border-b-2 hover:border-pink-200 hover:transition-all hover:text-apollo-acsent">{title}</span>
    </Link>
  )
}

export default Navlink
