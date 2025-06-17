import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { navList } from '../hooks/roots'
import { Lupa, Notification } from '../assets/Icons'
import userImage from "../assets/Images/userImage.png"

export const Header = () => {
  const {pathname} = useLocation()

  const [openInput, setOpenInput] = useState(false)
  function handleInput(){
    setTimeout(()=>{
      setOpenInput(false)
    }, 1000)
  }
  console.log(location)
  return (
    <div className='flex items-center justify-between mb-[54px]'>
      <strong className='font-bold text-[24px] text-[#252733]'>{navList.find(item => item.path == pathname).title}</strong>
      <div className='flex items-center gap-[14px]'>
        <button onClick={() => setOpenInput(true)}><Lupa/></button>
        <input className={`${openInput ? "w-[150px]" : "w-[0px]"} duration-300 border-1 border-[#9FA2B4] rounded-xl `} onBlur={handleInput} type="text" />
        <Notification/>
        <div className='h-[32px] bg-[#DFE0EB] w-[1px]'></div>
        <span className='font-semibold text-[14px] text-[#252733]'>Jones Ferdinand</span>
        <div className='w-[44px] h-[44px]'>
          <img src={userImage} alt="" className='w-[100%] h-[100%] object-cover rounded-full'/>
        </div>
      </div>
    </div>
  )
}
