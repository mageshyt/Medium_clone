// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../lib/sanity.clinet'

type Data = {
  name: string
}

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comment } = JSON.parse(req.body)
  try {
    const response = await client.create({
      _type: 'comment',
      post: {
        _ref: _id,
      },
      name,
      email,
      comment,
    })
    console.log(response)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Could not comment' })
  }

  console.log('Hello')
  return res.status(200).json({ message: 'Comment submitted' })
}
