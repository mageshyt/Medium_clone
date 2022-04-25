import React from 'react'

import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import Logo from '../../assets/images/medium.webp'
import { BsBookmarks } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import Image from 'next/image'
import { useRouter } from 'next/router'
const style = {
  wrapper: 'px-8 flex flex-col py-4 justify-between items-center',
  icon: 'text-2xl cursor-pointer text-gray-600',
}
const SliderBar = () => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
      {/* Top session*/}
      <div className="mt-10 cursor-pointer">
        <Image
          onClick={() => router.push('/')}
          src={Logo}
          height={60}
          width={60}
          objectFit="contain"
        />
      </div>

      {/* Middle */}
      <div className="mx-auto flex flex-col   space-y-8 px-2">
        <AiOutlineHome className={style.icon} />
        <AiOutlineBell className={style.icon} />
        <BsBookmarks className={style.icon} />
        <GrNotes className={style.icon} />

        {/* divider */}
        <hr className=" w-full border border-black" />
        <BsPencilSquare className={style.icon} />
      </div>

      {/* End */}
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/70838644?v=4"
          alt="profile"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </div>
  )
}

export default SliderBar
