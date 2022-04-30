import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Post } from '../../typings'
import { Skeleton } from 'primereact/skeleton'

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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      <Link href={`/post/${current}`}>
        <div className="group cursor-pointer overflow-hidden rounded-lg border">
          {loading ? (
            <Skeleton animation="wave" width="100%" height="15rem" />
          ) : (
            <img
              src={mainImage}
              alt="banner"
              className="h-60 w-full  rounded-xl  object-cover transition-all duration-200 ease-in-out group-hover:scale-105"
            />
          )}

          {/* details */}
          <div className="flex justify-between p-5">
            {/* title ,des,auth */}
            {loading ? (
              <Skeleton animation="wave" width="100%" height="3rem" />
            ) : (
              <div className="">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-sm">
                  {description} by {name}
                </p>
              </div>
            )}

            {/* author image */}
            {loading ? (
              <Skeleton
                animation="wave"
                width="3rem"
                height="3rem"
                shape="circle"
                className="mx-2 "
              />
            ) : (
              <img src={imageUrl} alt="" className="h-12 w-12 rounded-full" />
            )}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Posts
