'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageTransition } from '@/app/motionanimations/pagetransition'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AfXNflPage = () => {
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
  const impactRef = useRef(null)
  const sidebarRef = useRef(null)
  const examplesRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const overviewInView = useInView(overviewRef, { once: true, margin: '-100px' })
  const responsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: '-100px' })
  const segmentationInView = useInView(segmentationRef, { once: true, margin: '-100px' })
  const impactInView = useInView(impactRef, { once: true, margin: '-100px' })
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AF X NFL</h1>
            <p className="text-xl text-gray-600">Growth Engineering: Collaboration Campaigns, Event Pushes, and Zip Code Segmentation</p>
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
              src="/martech/af-x-nfl/Abercrombie-Fitch-x-NFL-Feat.jpg"
              alt="AF x NFL collaboration banner"
              width={1200}
              height={800}
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
                  This AF x NFL collaboration gave me the opportunity to build and deploy campaign experiences across
                  both email and push channels around key football moments. I translated creative direction into
                  production-ready assets and supported launches that were timely, targeted, and built for scale.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A major highlight was the CD LAMB event activation. As a Cowboys fan, it was especially meaningful
                  to support this launch while applying precise audience strategy and operational execution.
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
                    Developed campaign email builds and push sends for AF x NFL promotions.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Coordinated launch timing across channels to keep campaign messaging aligned.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Built audience segments using zip code targeting for event proximity relevance.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Executed and supported CD LAMB event communications from prep through launch.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Maintained QA quality and cross-platform consistency under event-driven timelines.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Zip Code Segmentation Strategy</h2>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate={segmentationInView ? 'animate' : 'initial'}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Geo-Based Targeting</h3>
                    <p className="text-gray-600 text-sm">
                      Utilized zip code segmentation to prioritize nearby audiences and focus event messaging on
                      customers most likely to attend.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Precision</h3>
                    <p className="text-gray-600 text-sm">
                      Refined sends to match event relevance and reduce noise, improving communication quality for
                      the CD LAMB activation push.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Channel Sync</h3>
                    <p className="text-gray-600 text-sm">
                      Aligned location-based push notifications with email campaign support so recipients experienced
                      consistent messaging before and during the event window.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Readiness</h3>
                    <p className="text-gray-600 text-sm">
                      Executed segmentation checks and final QA to ensure audience accuracy and deployment confidence
                      for the Fort Worth activation.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                ref={impactRef}
                initial="initial"
                animate={impactInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaign Impact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The CD LAMB event campaign demonstrated how strong collaboration plus precise segmentation can improve
                  event communication outcomes. By combining channel execution with geo-focused targeting, the campaign
                  reached the right audience at the right time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The event was a success at the Fort Worth location, and this project highlights how localized martech
                  strategy can strengthen both brand moments and customer engagement.
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
                    <span className="text-sm font-medium text-gray-500">Collaboration</span>
                    <p className="text-gray-900">AF X NFL</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Highlighted Event</span>
                    <p className="text-gray-900">CD LAMB Event</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Role</span>
                    <p className="text-gray-900">Growth Engineer (Email, Push, Segmentation)</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Targeting Method</span>
                    <p className="text-gray-900">Zip Code Segmentation</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Activation Outcome</span>
                    <p className="text-gray-900">Successful Fort Worth Event</p>
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
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Email Marketing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Push Notifications</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cordial</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Zip Code Segmentation</motion.span>
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
              Visual examples from the AF x NFL collaboration, including CD LAMB email and event push creatives,
              plus supporting campaign assets used to promote football-driven launches.
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
                    src="/martech/af-x-nfl/CD_EMAIL.png"
                    alt="CD LAMB email creative"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/martech/af-x-nfl/CD_LAMB_EVENT_PUSH.png"
                    alt="CD LAMB event push creative"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/martech/af-x-nfl/Superbowl Push.jpg"
                    alt="Superbowl push campaign creative"
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

export default AfXNflPage
