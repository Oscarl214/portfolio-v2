'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import IAM_Kids from '@/public/martech/IAM_Preview_Kids.gif'
import IAM_Adults from '@/public/martech/IAM_Preview_Adults.gif'
import IAM_HCO from '@/public/martech/IAM_Preview_HCO.gif'


const PushPage = () => {
  // Animation variants for fade-in effect
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Refs for scroll animations
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const responsibilitiesRef = useRef(null);
  const achievementsRef = useRef(null);
  const brandSpecificRef = useRef(null);
  const dataManagementRef = useRef(null);
  const sidebarRef = useRef(null);
  const examplesRef = useRef(null);

  // useInView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const responsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: "-100px" });
  const achievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
  const brandSpecificInView = useInView(brandSpecificRef, { once: true, margin: "-100px" });
  const dataManagementInView = useInView(dataManagementRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const examplesInView = useInView(examplesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gray-50 py-12 project-container">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial="initial"
          animate={headerInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center text-martech-600 hover:text-martech-800 mb-4"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Abercrombie, Kids, and Hollister</h1>
          <p className="text-xl text-gray-600">Growth Engineering: Push Notifications & Multi-Channel Optimization</p>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          initial="initial"
          animate={heroInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-md shadow-md overflow-hidden mb-8 border-2 border-gray-100"
        >
          <Image
            src="/martech/Brands.jpg" 
            alt="Logos" 
            height={700}
            width={900}
            className=" w-full  object-cover"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              ref={overviewRef}
              initial="initial"
              animate={overviewInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a growth engineer, I developed and QA'd responsive & dynamic HTML push notifications & In App messages for Abercrombie Adults, Kids, & Hollister brand within Content Management System, Cordial, 
                ensuring cross-platform compatibility across 1M+ subscribers. This project 
                focused on engineering engaging push campaigns that resonated with corresponding demographics while optimizing for growth metrics and maintaining technical excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The work encompassed technical template development, responsive design implementation, 
                cross-platform testing, and performance optimization—all engineered with growth objectives in mind 
                to ensure maximum deliverability and engagement rates for all brands across multiple regional markets.
              </p>
            </motion.div>

            <motion.div 
              ref={responsibilitiesRef}
              initial="initial"
              animate={responsibilitiesInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <motion.ul 
                variants={staggerContainer}
                initial="initial"
                animate={responsibilitiesInView ? "animate" : "initial"}
                className="space-y-3 text-gray-600"
              >
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Developed responsive HTML push templates from design figma mockups provided by design cross partners.
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Ensured cross-platform compatibility across Iphone & Android
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Conducted thorough QA testing for 1M+ subscriber base
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Optimized push performance and deliverability rates
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Maintained brand consistency across all push communications
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Tailored content for brands specific demographic and brand voice provided by Cross partners
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Created and managed ad hoc segmentation lists for targeted audience campaigns
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Uploaded and processed customer data lists for regional and demographic targeting
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Deployed campaigns across multiple regional markets (USCAN, EUUK, Germany, Mexico)
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              ref={achievementsRef}
              initial="initial"
              animate={achievementsInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Achievements</h2>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate={achievementsInView ? "animate" : "initial"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Push Development</h3>
                  <p className="text-gray-600 text-sm">
                    Aided Cordial Engineers create pixel-perfect HTML push templates that rendered consistently 
                    across both Android & IOS systems.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
                  <p className="text-gray-600 text-sm">
                    Implemented mobile-first responsive design ensuring optimal viewing 
                    experience across all device sizes and screen resolutions.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">
                    Established comprehensive testing protocols ensuring 99.9% 
                    compatibility across both major platforms.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              ref={brandSpecificRef}
              initial="initial"
              animate={brandSpecificInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Brand-Specific Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Working with perspective brands required a deep understanding of their brand identity 
                and target demographic. The push templates were designed to reflect the 
              brands desired aesthetic while maintaining technical excellence.
              </p>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate={brandSpecificInView ? "animate" : "initial"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Design</h3>
                  <p className="text-gray-600 text-sm">
                    Implemented brands signature visual styles with designated design elements.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Strategy</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored messaging to resonate with brands voice consistency.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              ref={dataManagementRef}
              initial="initial"
              animate={dataManagementInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Management & Regional Deployment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond development, I managed comprehensive data segmentation and regional deployment 
                strategies to ensure campaigns reached the right audiences in the right markets.
              </p>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate={dataManagementInView ? "animate" : "initial"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Segmentation</h3>
                  <p className="text-gray-600 text-sm">
                    Created ad hoc segmentation lists for targeted campaigns, including demographic, 
                    behavioral, and geographic targeting to maximize campaign effectiveness.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Uploaded and processed customer data lists, ensuring data quality and 
                    compliance with regional privacy regulations across all markets.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Markets</h3>
                  <p className="text-gray-600 text-sm">
                    Deployed campaigns across USCAN, EUUK, Germany, and Mexico markets, 
                    adapting content and timing for regional preferences and regulations.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div 
            ref={sidebarRef}
            initial="initial"
            animate={sidebarInView ? "animate" : "initial"}
            variants={fadeInRight}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
                className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Client</span>
                  <p className="text-gray-900">Abercrombie, Kids, Hollister</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Role</span>
                  <p className="text-gray-900">Growth Engineer</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Audience</span>
                  <p className="text-gray-900">1M+ Subscribers</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Duration</span>
                  <p className="text-gray-900">Ongoing</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Markets</span>
                  <p className="text-gray-900">USCAN, EUUK, Germany, Mexico</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
                className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate={sidebarInView ? "animate" : "initial"}
                className="flex flex-wrap gap-2"
              >
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">HTML</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">CSS</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">CMS Marketing</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Responsive Design</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cross-platform Testing</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Figma</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">PhotoShop</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cordial</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Data Segmentation</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Regional Deployment</motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Push Examples Section - Full Width */}
        <motion.div 
          ref={examplesRef}
          initial="initial"
          animate={examplesInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Push Notifications & In App messages Examples</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Some examples of different push notifications I developed for all three brands. 
            Each template was deisgned with re-usabilty across all brands while ensuring optimal performance across both IOS and Android and regional markets.
          </p>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={examplesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Example 1 */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={IAM_Kids} 
                  alt='PushPreview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </motion.div>

            {/* Example 2 */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={IAM_Adults} 
                  alt='Push Preview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </motion.div>

            {/* Example 3 */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={IAM_HCO} 
                  alt='Push Preview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate={examplesInView ? "animate" : "initial"}
            className="mt-8 p-4 bg-martech-50 rounded-lg"
          >
            <h3 className="font-semibold text-martech-900 mb-2">Technical Highlights</h3>
            <ul className="text-sm text-martech-800 space-y-1">
              <li>• Cross-platform compatibility tested across Android and IOS devices</li>
              <li>• Mobile-responsive design optimized for perspective audiences</li>
              <li>• Fast loading times with optimized images and efficient code</li>
              <li>• Accessibility features for inclusive design</li>
              <li>• Regional deployment across USCAN, EUUK, Germany, and Mexico markets</li>
              <li>• Advanced audience segmentation and data management capabilities</li>
            </ul>
          </motion.div>
        </motion.div>
          <div>
          <Link 
            href="/projects" 
            className="inline-flex items-center text-martech-600 hover:text-martech-800 mb-4"
          >
            ← Back to Projects
          </Link>
          </div>
      </div>
    </div>
  )
}

export default PushPage
