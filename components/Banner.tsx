import React from 'react'

const Banner = () => {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
      <div className="space-y-4 px-10">
        <span className=" max-w-xl font-serif text-3xl lg:text-6xl">
          <span className="underline decoration-red-400 decoration-4">
            Medium
          </span>{' '}
          is the place to write read and connect
        </span>
        <h2 className="">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      <div>
        {/* Banner img */}
        <img
          className="hidden h-32 object-contain md:flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="banner"
        />
      </div>
    </div>
  )
}

export default Banner
