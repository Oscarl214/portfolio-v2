'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageTransition } from '@/app/motionanimations/pagetransition'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DenimRetentionPage = () => {
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
  const dataManagementRef = useRef(null);
  const responsibilitiesRef = useRef(null);
  const channelsRef = useRef(null);
  const technicalRef = useRef(null);
  const collaborationRef = useRef(null);
  const sidebarRef = useRef(null);

  // useInView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const dataManagementInView = useInView(dataManagementRef, { once: true, margin: "-100px" });
  const responsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: "-100px" });
  const channelsInView = useInView(channelsRef, { once: true, margin: "-100px" });
  const technicalInView = useInView(technicalRef, { once: true, margin: "-100px" });
  const collaborationInView = useInView(collaborationRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Denim Retention Campaign</h1>
            <p className="text-xl text-gray-600">Growth Engineering: Large-Scale Multi-Channel Re-Engagement Strategy</p>
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
              src="/martech/Denim.jpg" 
              alt="Denim Retention Campaign"
              height={1000}
              width={1000} 
              className="w-full object-cover"
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
                  As a growth engineer, I led the technical implementation and content development for a comprehensive denim retention campaign designed to 
                  re-engage customers who purchased denim products the previous year but had not returned. 
                  This large-scale ad hoc project spanned multiple departments including web development, 
                  email marketing, push notifications, and media content, requiring seamless coordination 
                  across teams and platforms to maximize retention and revenue growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The campaign involved engineering sophisticated data management workflows, beginning with analytics 
                  team data uploads, CMS integration, advanced audience segmentation, and multi-channel 
                  deployment strategies—all designed to deliver personalized re-engagement messaging across email, 
                  push, and in-app channels with measurable growth outcomes.
                </p>
              </motion.div>

              <motion.div 
                ref={dataManagementRef}
                initial="initial"
                animate={dataManagementInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Management & Personalization Workflow</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A critical component of this project was managing complex data flows, implementing 
                  CMS scripting for personalization, and creating precise audience segments to ensure 
                  targeted, relevant messaging across all channels.
                </p>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={dataManagementInView ? "animate" : "initial"}
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Upload & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Collaborated with analytics team and Cordial engineers to receive, validate, and process 
                      comprehensive customer data identifying previous-year denim purchasers with no recent 
                      purchase activity. Worked closely with Cordial engineers during the data upload process 
                      to ensure proper integration and data integrity.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. CMS Scripting & Personalization</h3>
                    <p className="text-gray-600 text-sm">
                      Utilized CMS scripting language to write custom logic that dynamically inserts customer 
                      names and personalized content into email templates and messaging. This created a dynamic 
                      and personal touch that significantly improved engagement rates and customer connection.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Advanced Audience Segmentation</h3>
                    <p className="text-gray-600 text-sm">
                      Developed sophisticated queries within the CMS to filter and refine the uploaded data, 
                      creating specific customer segments based on purchase history, engagement levels, 
                      and demographic attributes for optimal targeting.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Multi-Channel Personalization</h3>
                    <p className="text-gray-600 text-sm">
                      Implemented personalized messaging across email, push notifications, and in-app channels, 
                      ensuring consistent personalization logic and customer experience across all touchpoints.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Suppression & Exclusion Logic</h3>
                    <p className="text-gray-600 text-sm">
                      Created automated suppression rules using CMS scripting to exclude customers who had 
                      already made purchases or opted out, preventing over-messaging and ensuring optimal 
                      customer experience.
                    </p>
                  </motion.div>
                </motion.div>
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
                    Led content development across email, push, and in-app messaging channels
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Collaborated with analytics team and Cordial engineers on data upload and integration workflows
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Wrote CMS scripting logic for dynamic customer name insertion and personalization
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Created complex audience segments using CMS query tools for targeted messaging
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Developed responsive HTML email templates with dynamic personalization
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Collaborated with media content team to ensure brand consistency across all assets
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Implemented batch send strategies to manage large-scale audience deployment
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2">•</span>
                    Conducted comprehensive QA testing across all channels and devices
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div 
                ref={channelsRef}
                initial="initial"
                animate={channelsInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Channel Implementation</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={channelsInView ? "animate" : "initial"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Marketing</h3>
                    <p className="text-gray-600 text-sm">
                      Developed responsive HTML email templates featuring personalized denim product 
                      recommendations and re-engagement incentives with dynamic customer name insertion, 
                      optimized for all major email clients and mobile devices.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Push Notifications</h3>
                    <p className="text-gray-600 text-sm">
                      Created concise, compelling push notification copy with personalized messaging 
                      to drive immediate engagement and complement email touchpoints with timely, 
                      relevant messaging.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">In-App Messaging</h3>
                    <p className="text-gray-600 text-sm">
                      Designed in-app message content with dynamic personalization to engage customers 
                      during active browsing sessions, presenting personalized denim recommendations 
                      based on previous purchase behavior.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">CMS Personalization</h3>
                    <p className="text-gray-600 text-sm">
                      Implemented advanced CMS scripting to create dynamic, personalized content that 
                      adapts to individual customer data, ensuring each message feels personally crafted 
                      and relevant to the recipient.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                ref={technicalRef}
                initial="initial"
                animate={technicalInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Achievements</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={technicalInView ? "animate" : "initial"}
                  className="space-y-4"
                >
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">CMS Scripting & Personalization:</span>
                      <span className="text-gray-600"> Developed custom CMS scripting logic for dynamic customer name insertion and personalized content delivery</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Data Integration:</span>
                      <span className="text-gray-600"> Successfully processed and integrated large-scale customer datasets with Cordial engineers</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Advanced Segmentation:</span>
                      <span className="text-gray-600"> Created sophisticated audience queries to target specific customer cohorts across multiple channels</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Batch Send Management:</span>
                      <span className="text-gray-600"> Implemented efficient batch send strategies to handle large audience volumes while maintaining deliverability</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Cross-Platform Compatibility:</span>
                      <span className="text-gray-600"> Ensured consistent messaging and visual presentation across email clients, mobile devices, and in-app experiences</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Performance Optimization:</span>
                      <span className="text-gray-600"> Optimized all creative assets for fast loading times and maximum engagement across channels</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                ref={collaborationRef}
                initial="initial"
                animate={collaborationInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cross-Team Collaboration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This large-scale campaign required seamless collaboration across multiple departments, 
                  with my role serving as the central coordinator for content and data management.
                </p>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={collaborationInView ? "animate" : "initial"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Team</h3>
                    <p className="text-gray-600 text-sm">
                      Coordinated with analytics team to receive, validate, and process customer data 
                      identifying target audience for the retention campaign.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cordial Engineers</h3>
                    <p className="text-gray-600 text-sm">
                      Worked closely with Cordial engineers during data upload and integration phases, 
                      ensuring proper data processing and CMS functionality for the campaign.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Media Content</h3>
                    <p className="text-gray-600 text-sm">
                      Collaborated with media content team to maintain brand consistency across all 
                      creative assets and messaging throughout the campaign.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Martech Team</h3>
                    <p className="text-gray-600 text-sm">
                      Partnered with martech specialists to optimize CMS workflows, audience segmentation, 
                      and multi-channel deployment strategies.
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
                    <span className="text-sm font-medium text-gray-500">Project Type</span>
                    <p className="text-gray-900">Customer Retention Campaign</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Role</span>
                    <p className="text-gray-900">Lead Content Developer</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Scope</span>
                    <p className="text-gray-900">Multi-Channel Ad Hoc Campaign</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Target Audience</span>
                    <p className="text-gray-900">Previous-Year Denim Purchasers</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Teams Involved</span>
                    <p className="text-gray-900">Martech, Analytics, Cordial Engineers, Media Content</p>
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
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Email Marketing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Push Notifications</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">In-App Messaging</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">CMS Scripting</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Personalization</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Data Management</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Audience Segmentation</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Batch Sends</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Responsive Design</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cross-Platform Testing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cordial</motion.span>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Outcomes</h3>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={sidebarInView ? "animate" : "initial"}
                  className="space-y-3"
                >
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Advanced CMS scripting for personalization</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Large-scale data integration with Cordial engineers</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Multi-channel campaign deployment</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Dynamic customer name insertion</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Efficient batch send management</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Unified brand experience across channels</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-8">
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

export default DenimRetentionPage
