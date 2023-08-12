import React from 'react'
import Destinations from '@/components/destinations';

export default function page() {
  return (
    <div className='min-h-screen
    bg-[url(/assets/destination/background-destination-mobile.jpg)]
    md:bg-[url(/assets/destination/background-destination-tablet.jpg)]
     lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-center bg-norepeat bg-cover flex flex-col items-center justify-center text-white lg:pt-8 pt-20 '>
        <div className='w-full md:w-3/4 flex gap-2'>
            <span className='font-bold text-slate-400'>01</span> 
            <h1 className=''>PICK YOUR DESTINATION</h1>
        </div>
        <Destinations/>
    </div>
  )
}
