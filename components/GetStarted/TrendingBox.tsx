import React from 'react'

import { TrendingData } from '../../assets/TrendingData'
const TrendingBox = () => {
  return (
    <div className="item-center flex flex-col">
      <div className="flex items-center space-x-2">
        <span className="text-4xl text-green-600">•</span>
        <span>What We're Reading Today</span>
      </div>
      {TrendingData.map((data, idx) => {
        return (
          <div key={idx} className="m-2 space-y-2 ">
            {/* pic and Author name */}
            <div className="flex space-x-2">
              <img
                src={data?.image}
                alt="post"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-sm font-semibold text-black">
                {data?.author}
              </span>
            </div>

            {/* Des */}
            <p className=" text-sm font-bold text-black">{data?.description}</p>
          </div>
        )
      })}
      <span className="cursor-pointer text-xs text-green-500">
        see the full list
      </span>
    </div>
  )
}

export default TrendingBox
