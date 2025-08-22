'use client'
import React from 'react'
import Link from 'next/link'
import NFLPreview from '@/public/martech/NFL_Preview_Email.gif'
import JeansPreview from '@/public/martech/Jeans_Preview_Email.gif'
import BlackFridayPreview from '@/public/martech/BFriday_Preview_Email.gif'
import Image from 'next/image'
import { PageTransition } from '@/app/motionanimations/pagetransition'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AbercrombiePage = () => {
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
  const dataManagementRef = useRef(null);
  const sidebarRef = useRef(null);
  const examplesRef = useRef(null);

  // useInView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const responsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: "-100px" });
  const achievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
  const dataManagementInView = useInView(dataManagementRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const examplesInView = useInView(examplesRef, { once: true, margin: "-100px" });

  return (
    <PageTransition>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Abercrombie & Fitch</h1>
            <p className="text-xl text-gray-600">Email Campaign Execution & Development</p>
          </motion.div>

          {/* Hero Section */}
          <motion.div 
            ref={heroRef}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          >
            <Image
              src="/martech/A&F.jpg" 
              alt="Abercrombie & Fitch"
              height={1000}
              width={1000} 
              className="w-full  object-cover"
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Developed and QAd responsive HTML email templates for Abercrombie Adults brand within Content Management System, Cordial, 
                  ensuring cross-platform compatibility across 1M+ subscribers. This project involved 
                  creating sophisticated email campaigns that maintained brand consistency while 
                  delivering exceptional user experience across all email clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The work included template development, responsive design implementation, 
                  cross-platform testing, and performance optimization to ensure maximum 
                  deliverability and engagement rates across multiple regional markets.
                </p>
              </motion.div>

              <motion.div 
                ref={responsibilitiesRef}
                initial="initial"
                animate={responsibilitiesInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-8"
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
                    Developed responsive HTML email templates from design figma mockups provided by design cross partners.
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Ensured cross-platform compatibility across major email clients
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Conducted thorough QA testing for 1M+ subscriber base
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Optimized email performance and deliverability rates
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Maintained brand consistency across all email communications
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Achievements</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={achievementsInView ? "animate" : "initial"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Development</h3>
                    <p className="text-gray-600 text-sm">
                      Created pixel-perfect HTML email templates that rendered consistently 
                      across Outlook, Gmail, Apple Mail, and mobile email clients.
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                    <p className="text-gray-600 text-sm">
                      Optimized email load times and reduced spam score through 
                      efficient coding practices and image optimization.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm">
                      Established comprehensive testing protocols ensuring 99.9% 
                      compatibility across all major email platforms.
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Management & Regional Deployment</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beyond email development, I managed comprehensive data segmentation and regional deployment 
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
                      Deployed campaigns across USCAN, EUUK, and Mexico markets, 
                      adapting content and timing for regional preferences and regulations.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Localization</h3>
                    <p className="text-gray-600 text-sm">
                      Ensured proper localization of email content, including language adaptation, 
                      currency formatting, and regional compliance requirements.
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
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Client</span>
                    <p className="text-gray-900">Abercrombie & Fitch</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Role</span>
                    <p className="text-gray-900">Email Developer & QA Specialist</p>
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
                    <p className="text-gray-900">USCAN, EUUK, Mexico</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-6"
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
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Email Marketing</motion.span>
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

          {/* Email Examples Section - Full Width */}
          <motion.div 
            ref={examplesRef}
            initial="initial"
            animate={examplesInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Examples</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Some examples of the email campaigns I developed for Abercrombie & Fitch. 
              Each template was designed to maintain brand consistency while ensuring optimal 
              performance across all email clients and regional markets.
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
                    src={NFLPreview} 
                    alt='NFL Email Preview' 
                    className='w-full h-full object-contain'
                    priority
                  />
                </div>
              </motion.div>

              {/* Example 2 */}
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image 
                    src={BlackFridayPreview} 
                    alt='Black Friday Email Preview' 
                    className='w-full h-full object-contain'
                    priority
                  />
                </div>
              </motion.div>

              {/* Example 3 */}
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image 
                    src={JeansPreview} 
                    alt='Jeans Email Preview' 
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
                <li>• Cross-platform compatibility tested across 20+ email clients</li>
                <li>• Mobile-responsive design with breakpoints for all device sizes</li>
                <li>• Optimized for accessibility and screen readers</li>
                <li>• Fast loading times with compressed images and efficient code</li>
                <li>• Regional deployment across USCAN, EUUK, and Mexico markets</li>
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
    </PageTransition>
  )
}

export default AbercrombiePage
