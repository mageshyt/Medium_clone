import { client } from './sanity.clinet'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => {
  return builder.image(source)
}

export const bodyImageBuilder = (body: [object]) => {
  const newBody = body.map((item: any) => {
    if (item._type === 'image') {
      const link = urlFor(item.asset._ref)
      item.asset.url = link.url()
      return item
    } else {
      return item
    }
  })
  return newBody
}

export const fetchUsers = async () => {
  const query = `*[_type == "author"]{
         name,
        "image": image.asset->url
  }`

  const result = await client.fetch(query)
  return result.slice(1)
}
