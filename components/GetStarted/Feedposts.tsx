import React from 'react'

const style = {
  Avatar: 'h-8 w-8 rounded-full',
  title: 'text-2xl  font-semibold',
  wrapper:
    'border-b cursor-pointer hover:scale-105 transition-all ease-in duration-200 hover:shadow-gray-500 hover:shadow-xl p-4  ',
}

const FeedPosts = ({ post }: any) => {
  const { author, _createdAt, categories } = post
  console.log(post)
  console.log('Category 👉 :', categories)
  return (
    <div className={style.wrapper}>
      {/* top auth pic name ,posted date */}
      <div className="m-2 flex items-center space-x-4">
        <img src={author?.imageUrl} alt="author pic" className={style.Avatar} />
        <span>{author?.name}</span>
        {/* created at */}
        <span className="text-gray-500">
          {new Date(_createdAt).toDateString().slice(4, 10)}
        </span>
      </div>
      {/*  */}
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-[80%]">
          <p className={style.title}>{post?.title}</p>
          <p>
            As a web developer, having a well calibrated editor is paramount to
            productivity. One of the best parts of Visual Studio Code as a
            general purpose editor, in addition to being free and open-source,
            is how much it
          </p>
          {/* categories */}
          <div className="mt-4">
            {categories &&
              categories.map((category: { title: string }) => (
                <span className="mx-2 rounded-2xl bg-[#121212] p-1 text-sm text-white">
                  {category.title}
                </span>
              ))}
          </div>
        </div>
        {/* Post Thumbnail*/}
        <div>
          <img
            src={post?.mainImage}
            alt="post"
            className="h-[200px] w-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default FeedPosts
