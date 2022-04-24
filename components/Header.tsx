import Link from 'next/link'
import React, { useRef } from 'react'
import { NextPage } from 'next'

const Header: NextPage = (): JSX.Element => {
  const toastBR = useRef(null)

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-6">
      {/* Left side Logo */}
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain "
            src="https://links.papareact.com/yvf"
            alt="logo"
          />
        </Link>

        <div className="hidden items-center space-x-4 md:flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-2xl bg-green-600 px-4 py-1 text-white">
            follow
          </h3>
        </div>
      </div>
      {/* Right */}
      <div className="flex cursor-pointer items-center space-x-4 font-medium text-green-600  ">
        <span>Sign In</span>
        <span className="cursor-pointer rounded-3xl border border-green-500 px-4 py-1">
          Get Started
        </span>
      </div>
    </header>
  )
}

export default Header
