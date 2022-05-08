import React from 'react'

import { BsPencilSquare } from 'react-icons/bs'
import Logo from '../../assets/images/medium.webp'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MediumContext } from '../../context/MediumContext'
import { Icons } from '../../assets/IconData'
const style = {
  wrapper: 'px-8 flex flex-row md:flex-col py-4 justify-between items-center',
  icon: 'text-2xl cursor-pointer text-gray-600',
}
const SliderBar = () => {
  const router = useRouter()
  const { Icon, setIcon } = React.useContext(MediumContext)

  return (
    <div className={style.wrapper}>
      {/* Top session*/}
      <div className="mt-10 hidden cursor-pointer md:block">
        <Image
          onClick={() => router.push('/')}
          src={Logo}
          height={60}
          width={60}
          objectFit="contain"
        />
      </div>

      {/* Middle */}
      <div className="mx-auto flex w-full flex-row justify-evenly space-y-0 px-2   md:flex-col md:space-y-8">
        {Icons.map((icon, index) => {
          return (
            <div key={index} onClick={() => setIcon(icon.name)}>
              {Icon === icon.name ? (
                <RenderIcon Icon={icon.Active} />
              ) : (
                <RenderIcon Icon={icon.Icon} />
              )}
            </div>
          )
        })}

        {/* divider */}
        <hr className=" hidden w-full border border-black md:block" />
        <BsPencilSquare className={`${style.icon} hidden md:block`} />
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

const RenderIcon = ({ Icon }) => {
  return <Icon className={style.icon} />
}

export default SliderBar
