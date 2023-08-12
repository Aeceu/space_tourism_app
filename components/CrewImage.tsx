'use client'
import React from 'react'
import Image from 'next/image';
import datas from "@/public/assets/data.json";


interface Props{
  index:number
}

const CrewImage = ({index}:Props) => {
  return (
    <Image
    src={datas.crew[index].images.png}
    width={300}
    height={300}
    alt="crew"
    className='object-cover lg:absolute lg:bottom-0 lg:right-44'/>
  )
}

export default CrewImage