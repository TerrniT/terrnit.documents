import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
}

const Meta = ({ title }: Props) => {
  return (
    <Head>
      <title>terrnit.{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta

