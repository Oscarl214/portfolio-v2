import React from 'react'
import Stats from './Stats'
import { Button } from '@nextui-org/react';
import AbercrombieLogo from '@/public/AF.png'
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import LogoCarousel from './LogoCarousel';
import { useMode } from '../../providers';

const HomePageContent = () => {
  const { mode } = useMode();
  return (
    <section
    className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4 overflow-x-hidden"
  >
   <div className="flex flex-col items-start justify-center gap-8 w-full">
      <div className="flex flex-col gap-2.5 w-full">
        <h1 className="font-outfit font-semibold text-4xl md:text-[68px] leading-tight md:leading-[74.8px] tracking-tighter">
          { mode ==='dev'? "O's World" : "Bridging Solutions one Campaign at a Time"} 
        </h1>
        <p className="dark:text-gray-300 text-base md:text-lg">
          {mode === 'dev' 
            ? "A full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and full-stack development. I enjoy creating scalable, user-friendly applications that solve real-world problems."
            : "With hands-on experience in marketing operations across global brands and freelance projects, I specialize in executing and optimizing digital campaigns that drive measurable impact. From coding responsive HTML emails to managing end-to-end campaign workflows in platforms like Salesforce Marketing Cloud and Oracle Responsys, I bridge technical expertise with marketing strategy. I’ve supported cross-brand initiatives, improved campaign efficiency through automation, and leveraged analytics to boost engagement and ROI—helping teams deliver campaigns at scale with precision and creativity."
          }
        </p>
      </div>
      <div className="flex flex-wrap gap-[60px]">
 <Stats mode={mode}/>
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
        {/* <p className="dark:text-gray-300 text-lg mb-8">
         {mode === 'dev' ? 'My Development Skills:' : 'My Marketing Technology Skills:'}
        </p>
        <LogoCarousel mode={mode} /> */}
      </div>
    </div>
    
    <div className="w-full">
      <p className="dark:text-gray-300 text-lg mb-2.5">
        {/* {mode === 'dev' ? 'Current Employer' : 'Current Role'} */}
      </p>
      <Image src={AbercrombieLogo.src} className='h-auto w-auto' alt="Thumbs Up Gif" height={75} width={75}/>
      <p className="dark:text-gray-300 text-sm mt-2">
        {/* {mode === 'dev' 
          ? 'Full-Stack Developer at Abercrombie & Fitch'
          : 'Marketing Technology Specialist at Abercrombie & Fitch'
        } */}
      </p>
    </div>
    </section>
  )
}

export default HomePageContent
