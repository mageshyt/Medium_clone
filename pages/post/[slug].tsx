import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import Header from '../../components/Header'
import { fetch_posts } from '../../lib/fetchPosts'
import { bodyImageBuilder, client } from '../../lib/sanity.clinet'
import { Post } from '../../typings'
// import {useFien/}
interface Props {
  post: Post
}
const style = {
  input:
    'form-input mt-1 w-full rounded-xl border py-3 px-3 shadow outline-none ring-sky-300 focus:ring ',
  textArea:
    'form-textarea mt-1 w-full rounded-xl border py-3 px-3 shadow outline-none ring-sky-300 focus:ring',
}
const Post = ({ post }: Props) => {
  
  const { mainImage, title, description, author, slug, body, _createdAt } = post
  
  const newBody = bodyImageBuilder(body)

  console.log(newBody, body)
  return (
    <div>
      <Header />
      <img src={mainImage} className="h-[180px]  w-full  object-cover" />
      <article className="mx-auto  max-w-3xl p-5">
        <span className="mt-10 mb-3 text-3xl">{title}</span>
        {/* description */}
        <p className="text-xl text-gray-500 ">{description}</p>
        <div className="flex items-center space-x-3">
          {/* user */}
          <img
            src={author.imageUrl}
            className="h-12 w-12 rounded-full"
            alt="userProfile"
          />
          {/* name */}
          <span className="text-sm text-gray-500">
            <span className="font-bold text-sky-400">{author.name}</span>{' '}
            -Published at {new Date(_createdAt).toLocaleString()}
          </span>
        </div>
        {/* Body */}
        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_TOKEN}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      {/* Break */}
      <hr className="mx-auto max-w-xl border border-yellow-300" />

      <form className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
        <h3 className="text-base font-semibold text-[#ffc017]">
          Enjoyed the article?
        </h3>
        <h4 className="text-2xl font-bold">Leave a comment below!</h4>
        <hr className="mt-2 py-3" />

        {/* user name */}
        <label className="mb-5 ">
          <span className="text-xl font-bold">Name</span>
          <input
            placeholder="Enter your name"
            type="text"
            className={style.input}
          />
        </label>
        {/* Email */}
        <label>
          <span className="text-xl font-bold">Email</span>
          <input
            placeholder="Enter your email"
            type="email"
            className={style.input}
          />
        </label>
        {/* comment */}
        <label>
          <span className="text-xl font-bold">Comment</span>
          <textarea
            className={style.textArea}
            placeholder="Enter your comment"
            rows={8}
          />
        </label>
      </form>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  console.log('getStaticPaths reloading')
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
  const query = `
  *[_type == "post" && slug.current==$slug][0]{
   _id,
  _createdAt,
   title,
   slug,
  author->{
 "imageUrl": image.asset->url,
  name
},
description,
"mainImage":mainImage.asset->url,
body
}
`
  const result = await client.fetch(query, {
    slug: params?.slug,
  })
  if (!result) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: result,
    },
    revalidate: 60,
  }
}
