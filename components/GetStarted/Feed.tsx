import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MediumContext } from '../../context/MediumContext'
import ReactTooltip from 'react-tooltip'
const style = {
  wrapper: `flex flex-col w-full max-auto p-3 border`,
}
const Feed = () => {
  const { user } = useContext(MediumContext)

  console.log({ user })
  return (
    <div className={style.wrapper}>
      {/* Top session */}
      <TopSession user={user} />

      {/* Following */}
      <div className="mt-4 p-8">
        <div className="mb-[0.5px] space-x-8">
          <span className="cursor-pointer underline underline-offset-8">
            following
          </span>
          <span>Recommends</span>
        </div>
        <hr />
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
      <div data-tip={user[0].name}>
        <img
          src={user[0]?.image}
          alt=""
          className="mt-10  h-12 w-12 cursor-pointer rounded-full  object-contain"
        />
      </div>
      <ReactTooltip place="top" type="light" effect="float" />
    </div>
  )
}
