import React from 'react'
import Stats from './Stats'
import { Button } from '@nextui-org/react';
import AbercrombieLogo from '@/public/AF.png'
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import LogoCarousel from './LogoCarousel';
const HomePageContent = () => {
  return (
    <section
    className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4 overflow-x-hidden"
  >
   <div className="flex flex-col items-start justify-center gap-8 w-full">
      <div className="flex flex-col gap-2.5 w-full">
        <h1 className="font-outfit font-semibold text-4xl md:text-[68px] leading-tight md:leading-[74.8px] tracking-tighter">
          Helping Bridge <span className='text-primary'>Solutions</span>
        </h1>
        <p className="dark:text-gray-300 text-base md:text-lg">A full-stack developer with 3+ years of experience in both software and marketing. I enjoy building sites and apps. My focus is React (Next.js).</p>
      </div>
      <div className="flex flex-wrap gap-[60px]">
 <Stats/>
      </div>
      <div className="flex items-center gap-4">
        <Link href='/contact'>
        
     <Button     className="inline-flex items-center justify-center h-11 px-6 bg-primary rounded-lg font-medium dark:text-white hover:bg-primary-600 transition-colors overflow-hidden group"
        >
      Lets Yap
      </Button>
            </Link>
            <Link href='/projects'>
      <Button    className="inline-flex items-center gap-1.5 bg-transparent dark:text-white hover:text-black hover:bg-primary transition-colors"
        >
          My Work
          <IoArrowForward className="text-green-500" />
      </Button>
      </Link>
      </div>
      <div className="w-full">
        <p className="dark:text-gray-300 text-lg mb-8">
         My Skills:
        </p>
        <LogoCarousel  />
      </div>
    </div>
    
    <div className="w-full">
      <p className="dark:text-gray-300 text-lg mb-2.5">
        Current Employer
      </p>
      <Image src={AbercrombieLogo.src} className='h-auto w-auto' alt="Thumbs Up Gif" height={75} width={75}/>
    
    </div>
    </section>
  )
}

export default HomePageContent
