'use client'
import React,{useState,useEffect} from 'react'
import datas from "@/public/assets/data.json";
import Image from 'next/image';
import { DestinationImage } from './DestinationImage';
import { DestinationInformation } from './DestinationInformation';

export default function Destinations() {
  const [location,setLocation] = useState(0);
  const [data,setData] = useState([]);

  return (
    <div className='lg:w-3/4 flex lg:flex-row flex-col items-center  '>
        <div className='w-1/2 p-4 flex justify-center'>
            <DestinationImage location={location}/>
        </div>

        <div className='w-3/4 lg:w-1/2'>
            <div className='flex gap-4 items-center justify-center lg:justify-start'>
                {
                    datas.destinations.map((destination,index)=>(
                        <button 
                        onClick={()=>setLocation(index)}
                        type="button" 
                        key={index} 
                        className={`py-2 ${location === index ? "border-b-2 border-white":""}`}>
                            {destination.name}
                        </button>
                    ))
                }
            </div>
            <DestinationInformation location={location}/>
        </div>
        
    </div>
  )
}



