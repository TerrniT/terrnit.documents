import React from 'react'

interface Props {
  children: any
}

const Main = ({ children }: Props) => {
  return (
    <main className="min-h-screen p-8 lg:p-32 ">
      {children}
    </main >
  )
}

export default Main 
