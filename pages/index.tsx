import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { fetch_posts } from '../lib/fetchPosts'
import { Post } from '../typings'

interface HomeProps {
  posts: [Post]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <div>
        {/* Banner */}
        <Banner />
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:p-6">
          {posts.map((post, index) => (
            <Posts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const result = await fetch_posts()
  console.log({ result })
  return {
    props: {
      posts: result,
    },
  }
}
