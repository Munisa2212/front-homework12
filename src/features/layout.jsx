import React from 'react'
import { Header } from '../modules/Header'
import PageRoutes from '../routes'
import Navbar from '../modules/Navbar'

export const Layout = () => {
  return (
    <div className="flex">
        <Navbar/>
        <div className='w-[78%] p-[36px] h-[100vh] overflow-y-auto'>
            <Header/>
            <PageRoutes/>
        </div>
    </div>
  )
}
