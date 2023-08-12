'use client'
import React,{useState} from 'react'
import { CrewInformation } from './CrewInformation'
import CrewImage from './CrewImage'

export default function Crews() {
const [crew,setCrew] = useState(3)
  return (
    <div className=' flex lg:flex-row md:flex-col flex-col-reverse w-3/4  justify-between items-center z-10 mt-16 lg:mt-0'>
            <CrewInformation crew={crew} setCrew={setCrew}/>
            <CrewImage index={crew}/>
    </div>
  )
}
