import React from 'react'
import datas from "@/public/assets/data.json"
import Image from 'next/image'
interface Props{
    index:number
}

const TechImage = ({index}:Props) => {
  return (
    <Image
    src={datas.technology[index].images.portrait}
    width={400}
    height={400}
    alt='img'
    className='bg-center object-cover'
    />
  )
}

export default TechImage