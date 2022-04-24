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
  body: [object]
  _createdAt: string
  _id: string
  comments: [object]
}

export interface FormInput {
  _id: string
  name: string
  email: string
  comment: string
}
