import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MediumContext } from '../../context/MediumContext'
import ReactTooltip from 'react-tooltip'
import { Post } from '../../typings'
import PostHeading from './PostHeading'
import FeedPosts from './Feedposts'
const style = {
  wrapper: `flex flex-col w-full max-auto overflow-y-scroll  p-3 border`,
  recommended: 'cursor-pointer underline underline-offset-[20px]',
}

const Feed = () => {
  const { Authors, post } = useContext(MediumContext)
  const [active, setActive] = React.useState('recommendation')
  //! remove the duplicate from users
  return (
    <div className={style.wrapper}>
      {/* Top session */}
      <TopSession user={Authors} />

      {/* Posts Heading */}
      <PostHeading setActive={setActive} active={active} />

      {/* users posts */}
      <div className="p-8">
        {post.map((post: Post, index: number) => {
          return <FeedPosts index={index} post={post} />
        })}
      </div>
    </div>
  )
}

export default Feed

const TopSession = ({ user }: any) => {
  return (
    <div className="mt-4 p-4">
      <div className="flex space-x-3">
        <div className="h-8 rounded-full bg-gray-300 p-2">
          <AiOutlinePlus />
        </div>
        <span> Keep up with the latest in any topic</span>
      </div>
      {/* followers */}
      <div data-tip={user[0]?.name}>
        <img
          src={user[0]?.image}
          alt=""
          className="mt-10  h-12 w-12 cursor-pointer rounded-full  object-cover"
        />
      </div>
      <ReactTooltip place="top" type="light" effect="float" />
    </div>
  )
}
