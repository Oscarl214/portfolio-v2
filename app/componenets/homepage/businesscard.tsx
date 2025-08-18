import React, { lazy } from 'react'
import profilePic from '@/public/MeAgain.jpg'

import Image from 'next/image'
import { Button } from '@nextui-org/react'

import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoArrowForward } from 'react-icons/io5'
import Link from 'next/link'

const BussinessCard=()=>{
    

  return (
    <div
      className="flex flex-col items-center gap-6 w-[344px] h-[560px] bg-[#272829] rounded-2xl p-[30px_20px] text-white"
    >
      <div className="relative w-60 h-70 rounded-2xl overflow-hidden flex-shrink-0">
<Image src={profilePic} height={400} width={400} className='w-auto h-auto' alt='Profile'/>
      </div>
      <div className="flex flex-col items-center justify-between flex-1 w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-center">
            Oscar Leal
            </h1>
            <p className="text-lg text-[#D9D9D9] text-center">Software Developer</p>
            <p className="text-lg text-[#D9D9D9] text-center">United States, Texas</p>
          </div>
          <div className="flex items-center gap-4">
   <Link href='https://www.linkedin.com/in/oscar-l-8371a512a/' target="_blank" className='text-[30px] hover:text-primary'>
  <FaLinkedin/>
   </Link>
   <Link href='https://github.com/Oscarl214' target="_blank" className='text-[30px] hover:text-primary'>
  <FaGithub/>
   </Link>
          
          </div>
        </div>
        <div className="w-full flex flex-row  justify-around">
            <Link href={'/contact'}>
            
            
      <Button className='bg-primary text-black animate-pulse'>Lets Chat</Button>
            </Link>
            <Link href={'/blog/66df958a15ebda87035dc3ad'}>
            
            <Button    className="inline-flex items-center gap-1.5 bg-transparent dark:text-white hover:text-black hover:bg-primary transition-colors"
        >
         My Story
          <IoArrowForward className="text-green-500 " />
          </Button>
                  </Link>
        
        </div>
      </div>
    </div>
  )
}

export default BussinessCard;