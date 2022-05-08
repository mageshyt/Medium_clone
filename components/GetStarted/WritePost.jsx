import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { Editor } from 'primereact/editor'
import { Button } from 'primereact/button'
import { setAuthorPost } from '../../lib/SetPost.lib'

const WritePost = () => {
  const [convertedText, setConvertedText] = useState('Some default content')
  const [text1, setText1] = useState(
    '<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>'
  )

  console.log(text1)
  return (
    <div className="mt-10 w-full">
      <div>
        <Editor
          style={{ height: '500px' }}
          value={text1}
          onTextChange={(e) => setText1(e.htmlValue)}
        />
      </div>
      <div className=" center mt-4 h-12 w-full ">
        <Button
          onClick={() => setAuthorPost(text1)}
          label="Submit"
          aria-label="Submit"
        />
      </div>
    </div>
  )
}

export default WritePost
