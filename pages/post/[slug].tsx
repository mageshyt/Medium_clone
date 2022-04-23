import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { fetch_posts } from '../../lib/fetchPosts'
import { Post } from '../../typings'
interface Props {
  post: Post
}
const Post = ({ post }: Props) => {
  console.log(post)
  return (
    <div>
      <Header />
      <div>
        <img
          src={post.mainImage}
          className="h-[500px] w-[500px] object-contain"
        />
        {post.description}
      </div>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const result: [Post] = await fetch_posts()
  const paths = result.map((post) => ({
    params: { slug: post.slug.current },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await fetch_posts()
  const post = result.find((post) => post.slug.current === params.slug)
  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
