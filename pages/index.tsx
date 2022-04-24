import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { fetch_posts } from '../lib/fetchPosts'
import { Post } from '../typings'

interface HomeProps {
  posts: [Post]
}

const Home = ({ posts }: HomeProps) => {
  let hash = new Map()

  let filteredPost = posts.filter((post: Post) => {
    if (!hash.has(post.slug.current)) {
      hash.set(post.slug.current, true)
      return true
    }
    return false
  })
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
          {filteredPost.map((post, index) => (
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
  //! filter the result  ;

  return {
    props: {
      posts: result,
    },
  }
}
