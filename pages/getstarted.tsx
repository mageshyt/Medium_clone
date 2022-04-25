import React from 'react'
import Feed from '../components/GetStarted/Feed'
import SlideBar from '../components/GetStarted/SliderBar'
import Widgets from '../components/GetStarted/Widgets'
const style = {
  wrapper: `flex justify-center overflow-y-scroll  h-screen w-screen select-none `,
  content: `flex w-full  justify-evenly  lg:w-[80%] lg:max-w-[1900px] lg:justify-between`,
}
const GetStarted = () => {
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
