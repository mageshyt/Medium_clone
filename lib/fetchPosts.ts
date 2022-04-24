import { client } from './sanity.clinet'
export const fetch_posts = async () => {
  const query = `
    *[_type == "post"]{
  title,
   slug,
  author->{
 "imageUrl": image.asset->url,
  name
},
description,
"mainImage":mainImage.asset->url,

}   
    `
  const result = await client.fetch(query)

  return result
}
