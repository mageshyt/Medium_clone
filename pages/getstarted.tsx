import React, { useEffect, useState } from 'react'
import Feed from '../components/GetStarted/Feed'
import SlideBar from '../components/GetStarted/SliderBar'
import Widgets from '../components/GetStarted/Widgets'
import WritePost from '../components/GetStarted/WritePost'
import { fetch_posts } from '../lib/fetchPosts'
const style = {
  wrapper: `flex justify-center  h-screen w-screen select-none `,
  content: `flex w-full  justify-evenly  lg:w-[80%] lg:max-w-[1900px] lg:justify-between`,
}

const GetStarted = () => {
  const [writePost, setWritePost] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch_posts()
    }
    fetchData()
  }, [])
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="flex w-full flex-col-reverse md:flex-row">
          {/* Slider Bar */}
          <SlideBar setWritePost={setWritePost} />
          {/* Feed */}
          <Feed />
        </div>
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  )
}

export default GetStarted
