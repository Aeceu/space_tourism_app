'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import {usePathname} from "next/navigation"
import {GiHamburgerMenu} from "react-icons/gi"

const links = [
    {
        index:"00",
        path:"/",
        name:"HOME"
    },
    {
        index:"01",
        path:"/destination",
        name:"DESTINATION"
    },
    {
        index:"02",
        path:"/crew",
        name:"CREW"
    },
    {
        index:"03",
        path:"/technology",
        name:"TECHNOLOGY"
    },
]


export default function NavBar() {
    const [toggle,setToggle] =  useState<boolean>(true)
    const pathname = usePathname();
  return (
    <nav className='w-full flex justify-between items-center fixed md:top-0 lg:top-10 text-white'>
        <div className='w-full  flex items-center'>
            <Image
            src="/assets/shared/logo.svg"
            width={40}
            height={40}
            alt='logo'
            className='mx-8'
            />
        <span className='w-full border-b-[1px] border-white/30 rounded-border hidden lg:flex'/>
        </div>

        {/* desktop */}
        <div className='hidden lg:flex gap-8 h-[70px] px-28 backdrop-blur-sm bg-white/10 '>
            {links.map((link,i)=>{
                return(
                    <span key={i} className={`flex gap-2 items-center text-sm ${pathname === link.path ? "border-b-2 border-white":""}`}>
                        <h1 className='font-bold '>{link.index}</h1>
                        <Link href={link.path} className=''>{link.name}</Link>
                    </span>
            )})}
        </div>

        {/* table */}
        <div className='hidden md:flex lg:hidden gap-8 h-[70px] p-8 backdrop-blur-sm bg-white/10 '>
            <div className='flex  gap-2 items-center '>
                {links.map((link,i)=>{
                    return(
                        <span key={i} className={`flex gap-2 items-center text-sm ${pathname === link.path ? "border-b-2 border-white":""}`}>
                            <Link href={link.path} className='py-[23px]'>{link.name}</Link>
                        </span>
                )})}
            </div>
        </div>

        {/* mobile */}
        <div className='flex md:hidden lg:hidden relative p-4'>
            <GiHamburgerMenu  
            size="2rem" 
            onClick={()=> setToggle(prev => !prev)}/> 
            {
                toggle && <div className='bg-white text-black font-bold rounded-md absolute top-12 right-0 text-[12px] py-4 px-2 flex flex-col items-end'>
                {links.map((link,i)=>{
                    return(
                        <p 
                        onClick={()=> setToggle(prev => !prev)}
                        key={i} className={`flex w-max items-center  ${pathname === link.path ? "border-b-[1px] border-black":""}`}>
                            <Link href={link.path} className=''>{link.name}</Link>
                        </p>
                )})}
            </div>
             }
        </div>
    </nav>
  )
}
