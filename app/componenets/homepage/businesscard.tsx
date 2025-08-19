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
      <div className="perspective-1000">
        <div className="relative w-[344px] h-[560px]">
          <div className="absolute inset-0 flex flex-col items-center gap-6 bg-gray-200 dark:bg-gray-700 rounded-2xl p-[30px_20px] animate-pulse">
            <div className="w-60 h-70 rounded-2xl bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="perspective-1000">
      <motion.div
        className={`relative w-[344px] h-[560px]`}
        variants={cardVariants}
        animate={mode === 'dev' ? 'reset' : 'flip'}
        initial="initial"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side (Dev mode) */}
        <motion.div
          className={`absolute inset-0 flex flex-col items-center gap-6 bg-[#272829] rounded-2xl p-[30px_20px] text-white`}
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
                <div className="relative w-60 h-70 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={profilePic} height={400} width={400} className='w-auto h-auto' alt='Profile'/>
                </div>
                <div className="flex flex-col items-center justify-between flex-1 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="text-4xl font-bold tracking-tight text-center">
                        Oscar Leal
                      </h1>
                      <p className="text-lg text-[#d14040] ] text-center text-md font-semibold">Software Developer</p>
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
                  <div className="w-full flex flex-row justify-around m-2">
                    <Link href={'/contact'}>
                      <Button className='bg-primary dark:text-white text-white animate-pulse'>Lets Chat</Button>
                    </Link>
                    <Link href={'/blog/66df958a15ebda87035dc3ad'}>
                      <Button className="inline-flex items-center gap-1.5 bg-transparent dark:text-white hover:text-black hover:bg-primary transition-colors">
                        My Story
                        <IoArrowForward className="text-green-500 " />
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
          className={`absolute inset-0 flex flex-col items-center gap-6 bg-[#98B5BF] rounded-2xl p-[30px_20px] text-white`}
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
                <div className="relative w-60 h-70 rounded-2xl overflow-hidden flex-shrink-0 ">
                  <Image src={martechPic} height={400} width={400} className='w-auto h-auto' alt='Martech Profile'/>
                </div>
                <div className="flex flex-col items-center justify-between flex-1 w-full text-black">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="text-4xl font-bold tracking-tight text-center">
                        Oscar Leal
                      </h1>
                      <p className="text-lg text-[#d14040] text-center text-md font-semibold">Marketing Operations Specialist</p>
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
                  <div className="w-full flex flex-row justify-around m-2">
                    <Link href={'/contact'}>
                      <Button className='bg-primary dark:text-white text-white animate-pulse font-semibold'>Lets Chat</Button>
                    </Link>
                    <Link href={'/blog/66df958a15ebda87035dc3ad'}>
                      <Button className="inline-flex items-center gap-1.5 bg-transparent border-3 font-semibold dark:text-white hover:text-black hover:bg-primary transition-colors">
                        My Story
                        <IoArrowForward className="text-green-500 " />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BussinessCard;