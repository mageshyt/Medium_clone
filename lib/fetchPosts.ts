import { client } from './sanity.clinet'
export const fetch_posts = async () => {
  const query = `
    *[_type == "post"]{
      _createdAt,
  title,
   slug,
  author->{
 "imageUrl": image.asset->url,
  name
},
description,
"mainImage":mainImage.asset->url,
categories[]->{
     title
   }
}   
    `
  const result = await client.fetch(query)
  const map = new Map()
  let filteredPost = result.filter((post: any) => {
    if (!map.has(post.slug.current)) {
      map.set(post.slug.current, true)
      return true
    }
    return false
  })

  return filteredPost
}
