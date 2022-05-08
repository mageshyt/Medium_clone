import { createContext, useEffect, useState } from 'react'
import { fetch_posts } from '../lib/fetchPosts'
import { client } from '../lib/sanity.clinet'
import { fetchUsers } from '../lib/Sanity.lib'

export const MediumContext = createContext()

export const MediumProvider = ({ children }) => {
  // ! to track the icons
  const [Icon, setIcon] = useState('home')
  //! to tracker the authors
  const [Authors, setAuthors] = useState([])

  const [post, setPost] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchUsers()
      const post_res = await fetch_posts()

      setAuthors(res)
      setPost(post_res)
    }
    fetch()
  }, [])

  return (
    <MediumContext.Provider
      value={{
        Icon,
        setIcon,
        Authors,
        post,
      }}
    >
      {children}
    </MediumContext.Provider>
  )
}
