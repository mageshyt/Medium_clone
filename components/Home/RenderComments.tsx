import React from 'react'
import { Comment } from '../../typings'

interface Props {
  comments: [Comment]
}

const RenderComments = ({ comments }: Props) => {
  return (
    <div className="mx-auto my-10 flex max-w-2xl flex-col space-y-3 p-10 shadow shadow-slate-900">
      <span className="text-4xl">Comments</span>
      <hr className="pb-2" />
      {comments.map((comment, idx): any => {
        return (
          <div
            className="flex  select-none items-center space-x-2 overflow-y-scroll pb-2"
            key={idx}
          >
            <h3 className="font-bold text-sky-500">{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default RenderComments
