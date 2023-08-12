import React from 'react'
import datas from "@/public/assets/data.json"

interface Props{
    index:number
}
const TechInfo = ({index}:Props) => {
  return (
    <div className='w-3/4 text-center'>
        <h1 className='text-sm text-white/70'>The Technology...</h1>
        <h1 className='text-6xl '>{datas.technology[index].name}</h1>
        <p className='text-sm text-white/70'>{datas.technology[index].description}</p>
    </div>
  )
}

export default TechInfo