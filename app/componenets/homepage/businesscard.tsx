import React from 'react'
import profilePic from '@/public/MeAgain.jpg'
import martechPic from '@/public/MartechPic.jpg'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { useMode } from '@/app/providers'

const BussinessCard = () => {
  const { mode, isLoaded } = useMode();

  if (!isLoaded) {
    return (
      <div className="relative w-[300px] h-[420px]">
        <div className="absolute inset-0 flex flex-col items-center gap-5 bg-gray-200/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-md p-8 animate-pulse border-2 border-white/20 shadow-lg">
          <div className="w-52 h-60 rounded-md bg-gray-300/30 dark:bg-gray-600/30"></div>
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="h-8 bg-gray-300/30 dark:bg-gray-600/30 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300/30 dark:bg-gray-600/30 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  const cardVariants = {
    initial: { rotateY: 0 },
    flip: { 
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    reset: { 
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, delay: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const CardContent = ({ 
    photo, 
    title, 
    contentKey 
  }: { 
    photo: typeof profilePic; 
    title: string; 
    contentKey: string;
  }) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={contentKey}
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center gap-5 w-full"
      >
        <div className="relative w-52 h-60 rounded-md overflow-hidden shadow-md border-2 border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10" />
          <Image src={photo} height={400} width={400} className="w-full h-full object-cover" alt="Profile" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-center text-white drop-shadow-lg">
            Oscar Leal
          </h1>
          <p className={`text-base font-semibold text-center drop-shadow-md ${
            mode === 'dev' ? 'text-[#d14040]' : 'text-white'
          }`}>
            {title}
          </p>
          <p className="text-sm text-[#D9D9D9] text-center drop-shadow-md">
            United States, Texas
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link href="https://www.linkedin.com/in/oscar-l-8371a512a/" target="_blank" className="text-[28px] text-white hover:text-primary transition-all duration-300 hover:scale-110">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/Oscarl214" target="_blank" className="text-[28px] text-white hover:text-primary transition-all duration-300 hover:scale-110">
            <FaGithub />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-[300px] h-[420px]"
        variants={cardVariants}
        animate={mode === 'dev' ? 'reset' : 'flip'}
        initial="initial"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side (Dev mode) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#272829]/80 backdrop-blur-md rounded-md p-8 text-white border-2 border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {mode === 'dev' && (
            <CardContent photo={profilePic} title="Software Developer" contentKey="dev" />
          )}
        </div>

        {/* Back side (Martech mode) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-martech-600/80 backdrop-blur-md rounded-md p-8 text-white border-2 border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {mode === 'martech' && (
            <CardContent photo={martechPic} title="Marketing Operations Specialist" contentKey="martech" />
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default BussinessCard;
