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
  comments: [Comment]
}

export interface Comment {
  approved: boolean
  comment: string
  email: string
  name: string
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
  post: {
    _ref: string
    _type: string
  }
}

export interface FormInput {
  _id: string
  name: string
  email: string
  comment: string
}
