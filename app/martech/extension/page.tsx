'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const ExtensionPage = () => {
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

  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const impactRef = useRef(null);
  const sidebarRef = useRef(null);
  const demoRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const demoInView = useInView(demoRef, { once: true, margin: "-100px" });

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Internal Dev Team Tooling</h1>
          <p className="text-xl text-gray-600">Growth Engineering: Chrome Extension for Developer Productivity</p>
        </motion.div>

        {/* Hero */}
        <motion.div
          ref={heroRef}
          initial="initial"
          animate={heroInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#0f1117] to-[#1a1d27] rounded-md shadow-md overflow-hidden mb-8 border-2 border-gray-100 flex items-center justify-center py-16"
        >
          <div className="text-center">
            <Image
              src="/martech/extension-icon.png"
              alt="Extension Icon"
              height={120}
              width={120}
              className="mx-auto rounded-2xl shadow-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Dev Team Quick Grabs</h2>
            <p className="text-gray-400 text-sm">Chrome Extension v1.0 &middot; Manifest V3</p>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
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
                As a growth engineer, I noticed our dev team was spending too much time on repetitive tasks — jumping between
                bookmarks to find the right tool, manually copying CMS scripting templates from old campaigns, and looking up
                translations and special characters. These were small things individually, but across every campaign
                build they added up and slowed us down.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I took the initiative to build a lightweight Chrome extension using vanilla JavaScript that puts everything
                the team needs in one click. Quick links to our daily tools, pre-validated CMS logic blocks, brand-specific
                email header copy, and localized CTA translations — all accessible from the browser toolbar without
                leaving the current tab. I built it with Manifest V3 and Vite, keeping it simple and fast with zero framework overhead.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              ref={featuresRef}
              initial="initial"
              animate={featuresInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate={featuresInView ? "animate" : "initial"}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Links Dashboard</h3>
                  <p className="text-gray-600 text-sm">
                    One-click access to the tools we use every day — our CMS platform, project management boards,
                    design files, team documentation, and developer resources. No more digging through bookmarks
                    or asking teammates for the right link.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CMS Logic Snippets</h3>
                  <p className="text-gray-600 text-sm">
                    Pre-built CMS scripting blocks for personalization, subject line logic,
                    market-based content splits, and tracking tag insertion — all with one-click copy.
                    These are the patterns the team uses in every campaign, and having them pre-validated
                    means no more syntax errors from typing them from memory.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Header Copy</h3>
                  <p className="text-gray-600 text-sm">
                    Pre-formatted email header copy for each brand with proper HTML formatting preserved,
                    including localized versions. Ensures brand consistency across all campaigns without
                    having to reference previous sends.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Localized CTAs &amp; Special Characters</h3>
                  <p className="text-gray-600 text-sm">
                    Quick access to localized CTA translations and special characters
                    like curly apostrophes that are needed frequently for brand-compliant copy but are tedious to look up.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Impact */}
            <motion.div
              ref={impactRef}
              initial="initial"
              animate={impactInView ? "animate" : "initial"}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact on the Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The extension was adopted by the dev team as a standard part of our campaign build workflow.
                What started as a personal productivity tool ended up improving how the whole team works.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate={impactInView ? "animate" : "initial"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeInUp} className="bg-martech-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-martech-900 mb-2">Faster Campaign Builds</h3>
                  <p className="text-martech-800 text-sm">
                    Eliminated the repetitive copy-paste workflow for CMS templates and brand copy.
                    Everything the team needs is one click away instead of scattered across tabs and docs.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-martech-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-martech-900 mb-2">Fewer Errors</h3>
                  <p className="text-martech-800 text-sm">
                    Pre-validated CMS logic blocks reduced the risk of syntax errors in
                    personalization and content split code across campaigns reaching large subscriber bases.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-martech-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-martech-900 mb-2">Easier Onboarding</h3>
                  <p className="text-martech-800 text-sm">
                    New team members had instant access to every resource and code pattern they needed
                    from day one, reducing ramp-up time and the need to ask around for links and snippets.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-martech-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-martech-900 mb-2">Initiative Beyond Sprint Work</h3>
                  <p className="text-martech-800 text-sm">
                    I identified the problem, built the solution, and shipped it to the team on my own initiative
                    outside of regular sprint work — growth engineering in practice, optimizing the process not just the product.
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
                  <span className="text-sm font-medium text-gray-500">Type</span>
                  <p className="text-gray-900">Internal Productivity Tool</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Platform</span>
                  <p className="text-gray-900">Chrome Extension (Manifest V3)</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Role</span>
                  <p className="text-gray-900">Creator &amp; Solo Developer</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Status</span>
                  <p className="text-gray-900">Adopted by Dev Team</p>
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
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">JavaScript</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">HTML</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">CSS</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Chrome APIs</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Manifest V3</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Vite</motion.span>
                <motion.span variants={fadeInUp} className="px-3 py-1 bg-martech-100 text-martech-800 text-sm rounded-full">Clipboard API</motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">What It Covers</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  CMS scripting templates
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Brand email headers
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Market-based content split logic
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Personalization logic
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Tracking tag insertion
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Localized CTA translations
                </li>
                <li className="flex items-start">
                  <span className="text-martech-600 mr-2">•</span>
                  Quick links to team tools
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          ref={demoRef}
          initial="initial"
          animate={demoInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The extension sits in the browser toolbar. One click opens a popup with organized sections — quick links,
            header copy, CMS logic blocks, localized translations, and special characters. Every snippet has a copy button
            that writes to clipboard instantly and shows a confirmation. No extra steps, no tab switching.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0f1117] rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Quick Links</h3>
              <p className="text-gray-400 text-xs">CMS, project boards, design files</p>
            </div>
            <div className="bg-[#0f1117] rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Code Snippets</h3>
              <p className="text-gray-400 text-xs">CMS logic, one-click copy</p>
            </div>
            <div className="bg-[#0f1117] rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Brand Copy</h3>
              <p className="text-gray-400 text-xs">Headers, CTAs, translations</p>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={demoInView ? "animate" : "initial"}
            className="mt-8 p-4 bg-martech-50 rounded-lg"
          >
            <h3 className="font-semibold text-martech-900 mb-2">Technical Highlights</h3>
            <ul className="text-sm text-martech-800 space-y-1">
              <li>• Built with vanilla JavaScript — no frameworks, fast and lightweight</li>
              <li>• Chrome Manifest V3 with Clipboard API for instant copy functionality</li>
              <li>• Organized UI with color-coded sections for different snippet categories</li>
              <li>• Visual copy confirmation feedback for better user experience</li>
              <li>• Designed to be easily extensible as the team&apos;s needs grow</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center text-martech-600 hover:text-martech-800"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExtensionPage
