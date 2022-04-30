import React from 'react'

const style = {
  recommended: 'cursor-pointer underline underline-offset-[20px]',
}
interface Props {
  setActive: any
  active: string
}

const PostHeading = ({ setActive, active }: Props) => {
  return (
    <div className="mt-4 p-8">
      <div className="mb-4 space-x-8">
        <span
          onClick={() => setActive('follow')}
          className={
            active === 'follow'
              ? `${style.recommended}`
              : `${style.recommended} no-underline`
          }
        >
          following
        </span>
        <span
          className={
            active === 'recommendation'
              ? `${style.recommended}`
              : `${style.recommended} no-underline`
          }
          onClick={() => setActive('recommendation')}
        >
          Recommends
        </span>
      </div>
      <hr />
    </div>
  )
}

export default PostHeading
