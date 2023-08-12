'use client'
import {FaCircle} from "react-icons/fa"
import React,{useState} from 'react'
import datas from "@/public/assets/data.json";

interface Props{
  crew:number,
  setCrew:any
}

export const CrewInformation = ({crew,setCrew}:Props) => {
  return (
    <div className='lg:mt-12 lg:w-1/2 h-full  flex flex-col items-center justify-between
    lg:text-start text-center gap-4'>
        <h1 className="text-3xl text-white/70 lg:mt-0 mt-10">{datas.crew[crew].role}</h1>
        <h1 className="text-4xl lg:text-6xl w-max">{datas.crew[crew].name}</h1>
        <h1 className="leading-relaxed">{datas.crew[crew].bio}</h1>
      
      <div className='lg:justify-start justify-center text-7xl font-bold flex gap-4 items-center'>
            {[0,1,2,3].map((dot,i)=>(
             <FaCircle 
             size=".7rem"
             onClick={()=>setCrew(i)}
             className={`cursor-pointer ${crew === dot ? "text-white":"text-white/50"}`}/>
            ))}
      </div>
    </div>
  )
}
