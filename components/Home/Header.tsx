import Link from 'next/link'
import React, { useRef } from 'react'
import { NextPage } from 'next'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { Toast } from 'primereact/toast'

const Header: NextPage = (): JSX.Element => {
  const toast = useRef(null)
  const router = useRouter()
  const { authenticate, isAuthenticated, user, account, logout } = useMoralis()

  const Login = () => {
    console.log('login')
    if (!isAuthenticated) {
      authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user?.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const logOut = async () => {
    await logout()
    console.log('logged out')
  }
  console.log(user)
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <Toast position="bottom-center" ref={toast} />
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
        {user || account ? (
          <span onClick={() => logOut()}>Logout</span>
        ) : (
          <span onClick={() => Login()}>Login</span>
        )}

        <span
          onClick={() => {
            if (user || account) {
              router.push('/getstarted')
            } else {
              toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Please Login',
              })
            }
          }}
          className="cursor-pointer rounded-3xl border border-green-500 px-4 py-1"
        >
          Get Started
        </span>
      </div>
    </header>
  )
}

export default Header
