import React, { lazy } from 'react'
import profilePic from '@/public/MeAgain.jpg'
import martechPic from '@/public/MartechPic.jpg'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { motion, AnimatePresence } from 'framer-motion'

import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoArrowForward } from 'react-icons/io5'
import Link from 'next/link'
import { useMode } from '@/app/providers'

const BussinessCard = () => {
  const { mode, isLoaded } = useMode();

  // Don't render content until mode is loaded to prevent flash of incorrect content
  if (!isLoaded) {
    return (
      <motion.div 
        className="perspective-1000"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-[344px] h-[560px]">
          <div className="absolute inset-0 flex flex-col items-center gap-6 bg-gray-200/20 dark:bg-gray-700/20 backdrop-blur-sm rounded-2xl p-[30px_20px] animate-pulse border border-white/10 shadow-2xl">
            <div className="w-60 h-70 rounded-2xl bg-gray-300/30 dark:bg-gray-600/30"></div>
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="h-8 bg-gray-300/30 dark:bg-gray-600/30 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300/30 dark:bg-gray-600/30 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Animation variants for the flip effect
  const cardVariants = {
    initial: { rotateY: 0 },
    flip: { 
      rotateY: 180,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    reset: { 
      rotateY: 0,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="perspective-1000"
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className={`relative w-[344px] h-[560px]`}
        variants={cardVariants}
        animate={mode === 'dev' ? 'reset' : 'flip'}
        initial="initial"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side (Dev mode) */}
        <motion.div
          className={`absolute inset-0 flex flex-col items-center gap-6 bg-[#272829]/80 backdrop-blur-md rounded-2xl p-[30px_20px] text-white border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <AnimatePresence mode="wait">
            {mode === 'dev' && (
              <motion.div
                key="dev-content"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col items-center gap-6 w-full h-full"
              >
                <div className="relative w-60 h-70 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10"></div>
                  <Image src={profilePic} height={400} width={400} className='w-auto h-auto' alt='Profile'/>
                </div>
                <div className="flex flex-col items-center justify-between flex-1 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="text-4xl font-bold tracking-tight text-center drop-shadow-lg">
                        Oscar Leal
                      </h1>
                      <p className="text-lg text-[#d14040] text-center text-md font-semibold drop-shadow-md">Software Developer</p>
                      <p className="text-lg text-[#D9D9D9] text-center drop-shadow-md">United States, Texas</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href='https://www.linkedin.com/in/oscar-l-8371a512a/' target="_blank" className='text-[30px] hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-md'>
                        <FaLinkedin/>
                      </Link>
                      <Link href='https://github.com/Oscarl214' target="_blank" className='text-[30px] hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-md'>
                        <FaGithub/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-around m-2">
                    <Link href={'/contact'}>
                      <Button className='bg-primary/90 backdrop-blur-sm dark:text-white text-white animate-pulse hover:bg-primary/100 transition-all duration-300 shadow-lg hover:shadow-xl'>
                        Lets Chat
                      </Button>
                    </Link>
                    <Link href={'/blog/66df958a15ebda87035dc3ad'}>
                      <Button className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm dark:text-white hover:text-black hover:bg-primary/90 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl">
                        My Story
                        <IoArrowForward className="text-green-500" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Back side (Martech mode) */}
        <motion.div
          className={`absolute inset-0 flex flex-col items-center gap-6 bg-martech-600/80 backdrop-blur-md rounded-2xl p-[30px_20px] text-white border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <AnimatePresence mode="wait">
            {mode === 'martech' && (
              <motion.div
                key="martech-content"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col items-center gap-6 w-full h-full"
              >
                <div className="relative w-60 h-70 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10"></div>
                  <Image src={martechPic} height={400} width={400} className='w-auto h-auto' alt='Martech Profile'/>
                </div>
                <div className="flex flex-col items-center justify-between flex-1 w-full text-black">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="text-4xl font-bold text-white tracking-tight text-center drop-shadow-lg">
                        Oscar Leal
                      </h1>
                      <p className="text-lg text-white text-center text-md font-semibold drop-shadow-md">Marketing Operations Specialist</p>
                      <p className="text-lg text-[#D9D9D9] text-center drop-shadow-md">United States, Texas</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href='https://www.linkedin.com/in/oscar-l-8371a512a/' target="_blank" className='text-[30px] hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-md'>
                        <FaLinkedin/>
                      </Link>
                      <Link href='https://github.com/Oscarl214' target="_blank" className='text-[30px] hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-md'>
                        <FaGithub/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-around m-2">
                    <Link href={'/contact'}>
                      <Button className='bg-primary/90 backdrop-blur-sm dark:text-white text-white animate-pulse font-semibold hover:bg-primary/100 transition-all duration-300 shadow-lg hover:shadow-xl'>
                        Lets Chat
                      </Button>
                    </Link>
                    <Link href={'/blog/66df958a15ebda87035dc3ad'}>
                      <Button className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border-3 font-semibold dark:text-white hover:text-black hover:bg-primary/90 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl">
                        My Story
                        <IoArrowForward className="text-green-500" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default BussinessCard;