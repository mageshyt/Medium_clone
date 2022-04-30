import React, { useEffect } from 'react'
import Feed from '../components/GetStarted/Feed'
import SlideBar from '../components/GetStarted/SliderBar'
import Widgets from '../components/GetStarted/Widgets'
import { fetch_posts } from '../lib/fetchPosts'
import { Post } from '../typings'
const style = {
  wrapper: `flex justify-center  h-screen w-screen select-none `,
  content: `flex w-full  justify-evenly  lg:w-[80%] lg:max-w-[1900px] lg:justify-between`,
}

interface Props {
  posts: [Post]
}

const GetStarted = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch_posts()
      console.log(result)
    }
    fetchData()
  }, [])
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {/* Slider Bar */}
        <SlideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  )
}

export default GetStarted
export const getServerSideProps = async () => {
  const result = await fetch_posts()
  //! filter the result  ;
  return {
    props: {
      posts: result,
    },
  }
}
