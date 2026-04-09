'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageTransition } from '@/app/motionanimations/pagetransition'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HcoNcaaPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const responsibilitiesRef = useRef(null)
  const segmentationRef = useRef(null)
  const highlightsRef = useRef(null)
  const sidebarRef = useRef(null)
  const examplesRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const overviewInView = useInView(overviewRef, { once: true, margin: '-100px' })
  const responsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: '-100px' })
  const segmentationInView = useInView(segmentationRef, { once: true, margin: '-100px' })
  const highlightsInView = useInView(highlightsRef, { once: true, margin: '-100px' })
  const sidebarInView = useInView(sidebarRef, { once: true, margin: '-100px' })
  const examplesInView = useInView(examplesRef, { once: true, margin: '-100px' })

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12 project-container">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            ref={headerRef}
            initial="initial"
            animate={headerInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <Link href="/projects" className="inline-flex items-center text-martech-600 hover:text-martech-800 mb-4">
              ← Back to Projects
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">HCO X NCAA</h1>
            <p className="text-xl text-gray-600">Growth Engineering: Partnership Campaigns Across Email, Push, and Segmentation</p>
          </motion.div>

          <motion.div
            ref={heroRef}
            initial="initial"
            animate={heroInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-md shadow-md overflow-hidden mb-8 border-2 border-gray-100"
          >
            <Image
              src="/martech/hco-ncaa/HOLL_NCAA-Banner.WEBP"
              alt="HCO X NCAA partnership banner"
              height={1000}
              width={1000}
              className="w-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                ref={overviewRef}
                initial="initial"
                animate={overviewInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The HCO X NCAA workstream was a high-visibility partnership opportunity where I supported campaign
                  development from build to launch. I contributed technical execution across both email and push,
                  helping translate partnership creative into production-ready communications that were consistent,
                  on-brand, and campaign-ready.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Alongside channel execution, I managed segmentation-driven delivery decisions so each send was
                  targeted to the right audience. This included ad hoc campaign support, most notably a UT-focused
                  event push connected to my alma mater, where speed, relevance, and clear segmentation were key.
                </p>
              </motion.div>

              <motion.div
                ref={responsibilitiesRef}
                initial="initial"
                animate={responsibilitiesInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <motion.ul
                  variants={staggerContainer}
                  initial="initial"
                  animate={responsibilitiesInView ? 'animate' : 'initial'}
                  className="space-y-3 text-gray-600"
                >
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Built and QA&apos;d partnership emails for Hollister x NCAA campaign moments.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Produced push sends aligned with email launches to support cross-channel consistency.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Created and refined segmented audiences based on campaign goals and data availability.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Supported ad hoc launch timelines while maintaining quality and delivery standards.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Delivered a UT-specific ad hoc push event activation with targeted audience logic.
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                ref={segmentationRef}
                initial="initial"
                animate={segmentationInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Segmentation & Send Strategy</h2>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate={segmentationInView ? 'animate' : 'initial'}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Definition</h3>
                    <p className="text-gray-600 text-sm">
                      Built campaign segments to match partnership objectives, combining eligibility filters,
                      engagement signals, and regional availability to improve send relevance.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Channel Timing</h3>
                    <p className="text-gray-600 text-sm">
                      Coordinated email and push sequencing so users received coherent messaging at the right
                      moments during each campaign drop.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Hoc Execution</h3>
                    <p className="text-gray-600 text-sm">
                      Handled rapid-turn event requests, including the UT ad hoc push, by quickly preparing lists,
                      validating content, and shipping targeted sends without sacrificing QA.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Controls</h3>
                    <p className="text-gray-600 text-sm">
                      Verified deliverability basics, rendering behavior, and launch readiness across both channels
                      to support reliable campaign performance.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                ref={highlightsRef}
                initial="initial"
                animate={highlightsInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Partnership Highlights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This project reflects the opportunity to support a meaningful brand partnership while balancing
                  creative storytelling with technical execution. The campaign work combined planned launches with
                  fast ad hoc moments, showing how flexible martech execution can drive timely, targeted messaging.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From production-ready emails to segmented push sends, the HCO X NCAA initiatives demonstrate
                  end-to-end growth engineering support for campaigns that need both scale and precision.
                </p>
              </motion.div>
            </div>

            <motion.div
              ref={sidebarRef}
              initial="initial"
              animate={sidebarInView ? 'animate' : 'initial'}
              variants={fadeInRight}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Client</span>
                    <p className="text-gray-900">Hollister</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Partnership</span>
                    <p className="text-gray-900">HCO X NCAA</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Role</span>
                    <p className="text-gray-900">Growth Engineer (Email, Push, Segmentation)</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Channel Mix</span>
                    <p className="text-gray-900">Email + Push Notifications</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Special Activation</span>
                    <p className="text-gray-900">UT ad hoc push event</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate={sidebarInView ? 'animate' : 'initial'}
                  className="flex flex-wrap gap-2"
                >
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">HTML</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">CSS</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cordial</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Email Marketing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Push Notifications</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Data Segmentation</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cross-platform Testing</motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            ref={examplesRef}
            initial="initial"
            animate={examplesInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Creative Examples</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Select examples of email and push assets used to support HCO X NCAA campaign launches,
              including NCAA partnership visuals and UT ad hoc event messaging.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={examplesInView ? 'animate' : 'initial'}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/martech/hco-ncaa/NCAA-EMAIL_GIF.gif"
                    alt="NCAA partnership email example"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/martech/hco-ncaa/NCAA_FLORIDA_BBALL_EVENT.jpeg"
                    alt="NCAA Florida basketball event push example"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/martech/hco-ncaa/NCAA_UT_ADHOC_EVENT.jpeg"
                    alt="UT ad hoc event push example"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div>
            <Link href="/projects" className="inline-flex items-center text-martech-600 hover:text-martech-800 mb-4 mt-6">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default HcoNcaaPage
