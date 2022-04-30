import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import Comments from '../../components/Home/Comments'
import Header from '../../components/Home/Header'
import RenderComments from '../../components/Home/RenderComments'
import { fetch_posts } from '../../lib/fetchPosts'
import { client } from '../../lib/sanity.clinet'
import { Post } from '../../typings'
// import {useFien/}
import { Image } from 'primereact/image'
import { bodyImageBuilder } from '../../lib/Sanity.lib'

interface Props {
  post: Post
}

const Post = ({ post }: Props) => {
  const {
    mainImage,
    title,
    description,
    author,
    slug,
    body,
    _createdAt,
    _id,
    comments,
  } = post

  const newBody = bodyImageBuilder(body)
  const [submit, setSubmit] = React.useState(false)
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
              image: ({ asset }: any) => (
                <Image src={asset.url} alt={asset.alt} preview />
              ),
            }}
          />
        </div>
      </article>
      {/* Break */}
      <hr className="mx-auto max-w-lg border border-yellow-300" />
      {submit ? (
        <div className="mx-auto my-10 flex max-w-2xl flex-col items-center bg-sky-500 p-10 text-white">
          <span className="text-3xl font-bold">Thanks For Your submission</span>
          <span className="text-gray-100">
            Once it has been Approved, it will appear below!
          </span>
        </div>
      ) : (
        <Comments id={_id} submit={submit} setSubmit={setSubmit} />
      )}
      {/* Render Comments */}
      <RenderComments comments={comments} />
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
'comments':*[
          _type == "comment" &&
          post._ref == ^._id &&
          Approved == true],

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
