'use client'
import TechImage from '@/components/TechImage';
import TechInfo from '@/components/TechInfo';
import React,{useState} from 'react'

const TechPage = () => {
    const [index,setIndex] = useState(0);

  return (
    <div className='min-h-screen bg-[url(/assets/technology/background-technology-desktop.jpg)]
    bg-center bg-no-repeat bg-cover text-white
    flex flex-col items-center justify-center gap-8 lg:pt-0 pt-20'>
        <div className="w-3/4 flex gap-2">
          <span className='font-bold text-slate-400'>03</span> 
          <h1 className=''>SPACE LAUNCH 101</h1>
        </div>
        <div className='w-full lg:w-3/4 flex lg:flex-row flex-col-reverse justify-around gap-4 items-center'>
            <div className='flex flex-row lg:flex-col gap-4'>
                <span onClick={()=>setIndex(0)} 
                className={`cursor-pointer px-4 py-2 border-[1px] border-white/70 rounded-full ${index === 0 ? "bg-white text-black":""}`}>1</span>
                <span onClick={()=>setIndex(1)} 
                className={`cursor-pointer px-4 py-2 border-[1px] border-white/70 rounded-full ${index === 1 ? "bg-white text-black":""}`}>2</span>
                <span onClick={()=>setIndex(2)} 
                className={`cursor-pointer px-4 py-2 border-[1px] border-white/70 rounded-full ${index === 2 ? "bg-white text-black":""}`}>3</span>
            </div>
            <TechInfo index={index}/>
            <TechImage index={index}/>        
        </div>
    </div>
  )
}

export default TechPage