'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageTransition } from '@/app/motionanimations/pagetransition'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Orchestration = () => {
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
  const workflowRef = useRef(null);
  const contributionsRef = useRef(null);
  const technicalRef = useRef(null);
  const collaborationRef = useRef(null);
  const sidebarRef = useRef(null);
  const implementationRef = useRef(null);

  // useInView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const workflowInView = useInView(workflowRef, { once: true, margin: "-100px" });
  const contributionsInView = useInView(contributionsRef, { once: true, margin: "-100px" });
  const technicalInView = useInView(technicalRef, { once: true, margin: "-100px" });
  const collaborationInView = useInView(collaborationRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const implementationInView = useInView(implementationRef, { once: true, margin: "-100px" });

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First-Time Buyer Orchestration</h1>
            <p className="text-xl text-gray-600">Multi-Channel Customer Journey & Content Strategy</p>
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
              src="/martech/AF_V2.webp" 
              alt="First-Time Buyer Orchestration"
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                                 <p className="text-gray-600 leading-relaxed mb-4">
                   Led the development of a comprehensive first-time buyer orchestration journey designed to 
                   encourage repeat purchases through strategic multi-channel communication. This project 
                   spanned across multiple teams within the martech and engineering departments, creating 
                   a sophisticated customer journey that combines promotional incentives with intelligent 
                   automation for both Hollister and Abercrombie Adults brands.
                 </p>
                <p className="text-gray-600 leading-relaxed">
                  The orchestration workflow begins with an immediate welcome email containing a promo code, 
                  followed by a series of strategically timed communications that include additional promotional 
                  offers to drive urgency and incentivize conversion. The system incorporates advanced testing 
                  capabilities with control and variant paths (T1–T4) for performance optimization.
                </p>
              </motion.div>

              <motion.div 
                ref={workflowRef}
                initial="initial"
                animate={workflowInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Orchestration Workflow</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={workflowInView ? "animate" : "initial"}
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Welcome Email Sequence</h3>
                    <p className="text-gray-600 text-sm">
                      Immediate welcome email with promotional code to incentivize first repeat purchase, 
                      setting the foundation for the customer journey.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Timing-Based Follow-ups</h3>
                    <p className="text-gray-600 text-sm">
                      Additional email touches sent based on strategic timing rules, each containing 
                      promotional codes to maintain engagement and drive urgency.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. A/B Testing Framework</h3>
                    <p className="text-gray-600 text-sm">
                      Control and variant paths (T1–T4) for later emails, enabling performance comparisons 
                      and continuous optimization of messaging strategies.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Cross-Channel Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Push notification branch triggered after first email send to reinforce engagement 
                      through additional communication channels.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="border-l-4 border-martech-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Intelligent Suppression</h3>
                    <p className="text-gray-600 text-sm">
                      API-driven suppression logic that continuously monitors buyer activity, automatically 
                      halting communications upon purchase to prevent over-messaging.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                ref={contributionsRef}
                initial="initial"
                animate={contributionsInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Key Contributions</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={contributionsInView ? "animate" : "initial"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Development</h3>
                    <p className="text-gray-600 text-sm">
                      Built out all email content and push notification copy, ensuring brand consistency 
                      while optimizing for conversion and engagement across multiple touchpoints.
                    </p>
                  </motion.div>
                                     <motion.div variants={fadeInUp}>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Brand Content Development</h3>
                     <p className="text-gray-600 text-sm">
                       Built out all email content and push notification copy for both Hollister and 
                       Abercrombie Adults brands, ensuring brand consistency while optimizing for conversion 
                       and engagement across multiple touchpoints.
                     </p>
                   </motion.div>
                                     <motion.div variants={fadeInUp}>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Brand Sandbox Testing</h3>
                     <p className="text-gray-600 text-sm">
                       Collaborated with Cordial partners during sandbox testing phases for both Hollister 
                       and Abercrombie Adults accounts, learning about orchestration workflows, timing rules, 
                       and suppression mechanisms while providing content expertise and feedback.
                     </p>
                   </motion.div>
                                     <motion.div variants={fadeInUp}>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Team Coordination</h3>
                     <p className="text-gray-600 text-sm">
                       Worked closely with Cordial engineers and internal teams to ensure seamless integration 
                       of promotional codes, API calls, and suppression logic within the orchestration framework.
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={technicalInView ? "animate" : "initial"}
                  className="space-y-4"
                >
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">API Integration:</span>
                      <span className="text-gray-600"> Implemented real-time API calls for buyer activity monitoring and suppression logic</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Promotional Code System:</span>
                      <span className="text-gray-600"> Integrated dynamic promo code generation and validation within email content</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">A/B Testing Framework:</span>
                      <span className="text-gray-600"> Built control and variant paths (T1-T4) for performance optimization and messaging refinement</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Cross-Channel Coordination:</span>
                      <span className="text-gray-600"> Synchronized email and push notification timing for unified brand experience</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Suppression Logic:</span>
                      <span className="text-gray-600"> Automated system to halt communications upon purchase detection</span>
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cross-Team Collaboration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This project required extensive collaboration across multiple departments, with my role 
                  serving as the bridge between content strategy and technical implementation.
                </p>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={collaborationInView ? "animate" : "initial"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                                     <motion.div variants={fadeInUp}>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Brand Cordial Partnership</h3>
                     <p className="text-gray-600 text-sm">
                       Collaborated with Cordial engineers during testing phases for both Hollister and 
                       Abercrombie Adults sandbox accounts, learning about orchestration workflows while 
                       providing content expertise and ensuring proper integration of promotional codes 
                       and API endpoints.
                     </p>
                   </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Martech Team Coordination</h3>
                    <p className="text-gray-600 text-sm">
                      Coordinated with martech team members to align orchestration strategy with broader 
                      marketing objectives and customer experience goals.
                    </p>
                  </motion.div>
                                     <motion.div variants={fadeInUp}>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Implementation Support</h3>
                     <p className="text-gray-600 text-sm">
                       Supported engineering teams during implementation phases, providing content expertise 
                       and ensuring smooth integration of promotional codes and orchestration logic.
                     </p>
                   </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakeholder Communication</h3>
                    <p className="text-gray-600 text-sm">
                      Maintained clear communication with stakeholders across departments, providing 
                      regular updates on project progress and implementation milestones.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                ref={implementationRef}
                initial="initial"
                animate={implementationInView ? "animate" : "initial"}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Implementation & Results</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The orchestration project has been successfully implemented and is now actively 
                  driving customer engagement and repeat purchase behavior across the platform.
                </p>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate={implementationInView ? "animate" : "initial"}
                  className="space-y-4"
                >
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Live Implementation:</span>
                      <span className="text-gray-600"> Orchestration is now active and processing first-time buyer journeys in real-time</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Performance Monitoring:</span>
                      <span className="text-gray-600"> A/B testing framework continuously optimizes messaging based on conversion data</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Customer Experience:</span>
                      <span className="text-gray-600"> Unified cross-channel experience with intelligent suppression preventing over-messaging</span>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">Scalability:</span>
                      <span className="text-gray-600"> Framework designed to scale across multiple brands and customer segments</span>
                    </div>
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
                    <span className="text-sm font-medium text-gray-500">Project Type</span>
                    <p className="text-gray-900">Customer Journey Orchestration</p>
                  </div>
                  <div>
                                       <span className="text-sm font-medium text-gray-500">Role</span>
                   <p className="text-gray-900">Content Developer & Strategy Specialist</p>
                  </div>
                                     <div>
                     <span className="text-sm font-medium text-gray-500">Scope</span>
                     <p className="text-gray-900">Multi-Brand & Multi-Channel</p>
                   </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Status</span>
                    <p className="text-gray-900">Live Implementation</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Teams Involved</span>
                    <p className="text-gray-900">Martech, Engineering, Cordial, Strategy, Design</p>
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
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Email Marketing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Push Notifications</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Customer Journey</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">A/B Testing</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">API Integration</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cordial</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Content Strategy</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Automation</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Suppression Logic</motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Cross-Channel</motion.span>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-6"
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
                     <span className="text-sm text-gray-600">Multi-brand orchestration for Hollister & Abercrombie Adults</span>
                   </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Multi-channel engagement strategy</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Automated promotional code system</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Intelligent suppression logic</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <span className="text-martech-600 mr-2 mt-1">•</span>
                    <span className="text-sm text-gray-600">Performance optimization framework</span>
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

export default Orchestration
