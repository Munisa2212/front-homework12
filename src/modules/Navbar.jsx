import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/Icons'
import { navList } from '../hooks/roots'

function Navbar() {
  return (
    <div className="w-[22% bg-[#363740] h-[100vh] overflow-y-auto" >
        <div className='pt-[41px] pl-[21px] pb-[63px] pr-[43px]'>
            <Link to={"/"} className='flex items-center gap-[12px]'>
                <Logo/>
                <span className='font-bold text-[19px] text-[#A4A6B3]'>Dashboard Kit</span>
            </Link>
        </div>
        <nav className='flex flex-col'>
            {navList.map(item => <NavLink key={item.id} to={item.path} className={`flex items-center py-[20px] pl-[32px] text-[#A4A6B3] gap-[24px] font-light text-[16px] relative`}>
                {item.icon}
                <span>{item.title}</span>
            </NavLink>)}
        </nav>
    </div>
  )
}

export default Navbar