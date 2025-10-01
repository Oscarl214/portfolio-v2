'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PageTransition } from '@/app/motionanimations/pagetransition'

const ComingSoonPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const pulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Refs for scroll animations
  const headerRef = useRef(null)
  const heroRef = useRef(null)

  // useInView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
    <PageTransition>
      <div className="min-h-screen  project-container">
        <div className="max-w-6xl mx-auto px-4 w-full py-12">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            initial="initial"
            animate={headerInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center text-martech-600 hover:text-martech-800 mb-8 text-lg font-medium"
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div 
            ref={heroRef}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-martech-200">
              <motion.div
                variants={pulse}
                animate="animate"
                className="mb-8 flex justify-center"
              >
                <Image
                  src="/cat.jpg"
                  alt="Cat"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-martech-900 mb-6">
                Still Working on It Boss
              </h2>
              <p className="text-xl text-martech-700 leading-relaxed max-w-3xl mx-auto">
                I promise it be worth while once it is ready ! 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default ComingSoonPage
