import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})
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
