import React, { useState } from 'react'

import { InputText } from 'primereact/inputtext'
import TrendingBox from './TrendingBox'

const style = {
  wrapper: `w-[30%] hidden md:flex space-between space-y-10  flex-col p-4`,
  unlimitedBtn: '',
}
const Widgets = () => {
  const [value, setValue] = useState('')
  return (
    <div className={style.wrapper}>
      {/* unlimited access btn */}
      <div className=" w-full cursor-pointer rounded-full bg-black p-3 text-center text-white ">
        <span>Unlimited access</span>
      </div>
      {/* search input */}
      <div className="w-full ">
        {/* SearchInput */}
        {searchInput(value, setValue)}
        {/* trending */}
        <TrendingBox />
      </div>
    </div>
  )
}

export default Widgets
const searchInput = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          style={{
            borderRadius: '20px',
            width: '300px',
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </span>
    </div>
  )
}
