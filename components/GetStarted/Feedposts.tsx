import { useRouter } from 'next/router'
import React from 'react'

const style = {
  Avatar: 'h-8 w-8 rounded-full',
  title: 'text-2xl  font-semibold',
  wrapper:
    'border-b cursor-pointer w-[100%] hover:scale-105 transition-all ease-in duration-200 hover:shadow-gray-500 hover:shadow-xl p-4',
  description: '',
}

const FeedPosts = ({ post }: any) => {
  const {
    author,
    _createdAt,
    categories,
    slug: { current },
  } = post

  console.log('categories 👉', categories)
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/post/${current}`)}
      className={style.wrapper}
    >
      {/* top auth pic name ,posted date */}
      <div className="m-2 flex items-center space-x-4    ">
        <img src={author?.imageUrl} alt="author pic" className={style.Avatar} />
        <span>{author?.name}</span>
        {/* created at */}
        <span className="text-gray-500">
          {new Date(_createdAt).toDateString().slice(4, 10)}
        </span>
      </div>

      {/*  */}
      <div className="flex flex-row justify-between  ">
        <div className="w-[80%]">
          <p className={style.title}>{post?.title}</p>
          <p className={style.description}>
            As a web developer, having a well calibrated editor is paramount to
            productivity. One of the best parts of Visual Studio Code as a
            general purpose editor, in addition to being free and open-source,
            is how much it
          </p>
        </div>

        <div>
          <img
            src={post?.mainImage}
            alt="post"
            className="h-[100px] w-[150px] object-contain  md:h-[200px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  )
}

export default FeedPosts
