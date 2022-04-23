export interface Post {
  title: string
  author: {
    name: string
    imageUrl: string
  }
  description: string
  slug: {
    current: string
  }
  mainImage: string
}
