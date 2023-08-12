import Crews from '@/components/Crews'
import React from 'react'

export default function CrewPage() {
  return (
    <div className='min-h-screen 
    bg-[url(/assets/crew/background-crew-mobile.jpg)]
    md:bg-[url(/assets/crew/background-crew-tablet.jpg)]
    lg:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center text-white '>
        <Crews/>
    </div>
  )
}
