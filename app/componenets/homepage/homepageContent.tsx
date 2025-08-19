import React from 'react'
import Stats from './Stats'
import { Button } from '@nextui-org/react';
import AbercrombieLogo from '@/public/AF.png'
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import LogoCarousel from './LogoCarousel';
import { useMode } from '../../providers';
import Logo from '@/public/ol-logo.png';

const HomePageContent = () => {
  const { mode, isLoaded } = useMode();
  
  // Don't render content until mode is loaded to prevent flash of incorrect content
  if (!isLoaded) {
    return (
      <section className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4 overflow-x-hidden">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </section>
    );
  }

  return (
    <section
    className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4 overflow-x-hidden "
  >
   <div className="flex flex-col items-start gap-6 w-full">
      <div className="flex flex-col gap-2.5 w-full">
        <h1 className="font-outfit font-semibold text-4xl md:text-[68px] leading-tight md:leading-[74.8px] tracking-tighter ">
          { mode ==='dev'? "O's World" : "Bridging Solutions one Campaign at a Time"} 
        </h1>
        <div className={`w-full p-6 rounded-xl border-l-4 ${mode === 'dev' ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-500' : 'bg-martech-50/80 dark:bg-martech-950/20 border-martech-600'} backdrop-blur-sm`}>
          <p className={`${mode === 'dev' ? 'dark:text-blue-100 text-blue-900' : 'dark:text-martech-100 text-martech-900'} md:text-lg leading-relaxed font-medium`}>
            {mode === 'dev' 
              ? "A full-stack free lance developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and full-stack development. I enjoy creating scalable, user-friendly applications that solve real-world problems."
              : "A professional in marketing operations, I bring hands-on experience across global brands and freelance projects. I specialize in executing and optimizing digital campaigns—coding responsive HTML emails, managing workflows in various diffrent CMS softwares, most recently via Cordial, and Oracle Responsys, and driving measurable results through automation and analytics. Adaptable and quick to learn new CMS platforms and technologies, I bridge technical expertise with marketing strategy to help teams deliver campaigns at scale with precision and creativity."
            }
          </p>
          <p className='mt-8 italic'>Outside of my professional venture, I enjoy being active, traveling, and challenging myself to be better than I was the day before.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[60px]">
 <Stats mode={mode}/>
      </div>
      <div className="flex items-center gap-4">
        <Link href='/contact'>
        
     <Button     className="inline-flex items-center font-semibold justify-center h-11 px-6 bg-primary rounded-lg  dark:text-white hover:bg-primary-600 transition-colors overflow-hidden group"
        >
      Lets Chat
      </Button>
            </Link>
            <Link href='/projects'>
      <Button    className="inline-flex items-center gap-1.5 bg-transparent border-3 font-semibold dark:text-white hover:text-black hover:bg-primary transition-colors"
        >
          My Work
          <IoArrowForward className="text-green-500" />
      </Button>
      </Link>
      </div>
      <div className="w-full">
        <p className="dark:text-gray-300 text-lg font-semibold mb-8">
         {mode === 'dev' ? 'My Development Skills:' : 'My Marketing Technology Skills:'}
        </p>
        <LogoCarousel mode={mode} />
      </div>
    </div>
    
    <div className="w-full">
      <p className="dark:text-gray-300 text-lg mb-2.5 font-semibold">
        {mode === 'dev' ? 'Self-Employed: Os World' : 'Current Employed at A&F as a Marketing Email Developer'}
      </p>
      <Image src={mode==='dev' ? Logo : AbercrombieLogo.src} className='h-auto w-auto' alt="Thumbs Up Gif" height={75} width={75}/>
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
