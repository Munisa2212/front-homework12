import React from 'react'
import { userList } from '../hooks/roots'
import Priority from '../components/priority'


export const TicketTable = () => {
  return (
    <table className='w-full'>
        <thead>
            <tr className='text-[14px] text-[#9FA2B4] font-bold '>
                <th className='text-start pb-[12px]'>Ticket details</th>
                <th className='text-start pb-[12px]'>Customer name</th>
                <th className='text-start pb-[12px]'>Date</th>
                <th className='text-start pb-[12px]'>Priority</th>
            </tr>
        </thead>
        <tbody>
            {userList.map((item, index) => (
                <tr key={index} className='border-b'>
                    <td className='px-[31px] py-[24px]'>
                        <div className='flex items-center gap-[24px]'>
                            <img src={item.imgURL} alt="" className='w-[44px] h-[44px] object-cover rounded-[50%]' />
                        <div className='flex flex-col'>
                            <h2 className='text-[14px] text-[#252733] font-semibold'>{item.message}</h2>
                            <p className='text-[#C5C7CD] font-normal text-[12px]'>{item.updatedAt}</p>
                        </div>
                        </div>
                    </td>
                    <td className=' py-[24px]'>
                        <h2 className='text-[14px] text-[#252733] font-semibold'>{item.name}</h2>
                        <p className='text-[#C5C7CD] font-normal text-[12px]'>{item.createdAt}</p>
                    </td>
                    <td className=' py-[24px]'>
                        <h2 className='text-[#252733] text-[14px] font-semibold'>{item.flightDate}</h2>
                        <p className='text-[#C5C7CD] font-normal text-[12px]'>{item.flightTime}</p>
                    </td>
                    <td className=' py-[24px]'>
                        <Priority id={item.priorityId}/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
