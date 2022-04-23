import Link from 'next/link'
import React from 'react'
import { Post } from '../typings'

interface PostProps {
  post: Post
}

const Posts = ({ post }: PostProps) => {
  const {
    title,
    author: { imageUrl, name },
    slug: { current },
    mainImage,
    description,
  } = post
  console.log(title, description)
  return (
    <>
      <Link href={`/posts/${current}`}>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          <img
            src={mainImage}
            alt="banner"
            className="h-60 w-full  rounded-xl  object-cover transition-all duration-200 ease-in-out group-hover:scale-105"
          />

          {/* details */}
          <div className="flex justify-between p-5">
            {/* title ,des,auth */}
            <div className="">
              <p className="text-lg font-bold">{title}</p>
              <p className="text-sm">
                {description} by {name}
              </p>
            </div>
            {/* author image */}
            <img src={imageUrl} alt="" className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </Link>
    </>
  )
}

export default Posts
