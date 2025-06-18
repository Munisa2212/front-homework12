import React from 'react'

const Priority = ({id}) => {
  return (
    <button className={`${id == 3 ? "bg-[red]" : (id == 2 ? "bg-[green]" : "bg-[yellow]")} py-[5px] px-[12px] text-[11px] text-[#FFFFFF] font-bold rounded-[10px]`}>
        { id == 3 ? "HIGH" : (id == 2 ? "NORMAL" : "LOW") }
    </button>
  )
}

export default Priority