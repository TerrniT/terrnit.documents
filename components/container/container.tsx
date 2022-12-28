import React from 'react'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 w-full max-w-8xl mt-8 lg:mt-20">
      {children}
    </div>
  )
}
export default Container
