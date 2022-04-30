import { createContext, useEffect, useState } from 'react'
import { client, fetchUsers } from '../lib/sanity.clinet'

export const MediumContext = createContext()

export const MediumProvider = ({ children }) => {
  const [Icon, setIcon] = useState('home')
  const [user, setUsers] = useState([])
  useEffect(async () => {
    const res = await fetchUsers()
    setUsers(res)
  }, [])
  return (
    <MediumContext.Provider
      value={{
        Icon,
        setIcon,
        user,
      }}
    >
      {children}
    </MediumContext.Provider>
  )
}
