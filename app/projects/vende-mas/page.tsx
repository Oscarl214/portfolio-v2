'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { PageTransition } from '@/app/motionanimations/pagetransition';

const VendeMasPage = () => {
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const sidebarRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const overviewInView = useInView(overviewRef, { once: true, margin: '-100px' });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const techInView = useInView(techRef, { once: true, margin: '-100px' });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: '-100px' });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12 project-container font-sans">
        <div className="max-w-4xl mx-auto px-4 w-full">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial="initial"
            animate={headerInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
            >
              ← Back to Projects
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vende Más</h1>
            <p className="text-xl text-gray-600">
              Mobile growth assistant for local businesses, with onboarding, AI-assisted content, and clear sales milestones
            </p>
          </motion.div>

          {/* Overview + App Walkthrough side by side on desktop */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* App Walkthrough - iPhone-style frame */}
            <motion.div
              ref={heroRef}
              initial="initial"
              animate={heroInView ? 'animate' : 'initial'}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xs md:max-w-sm">
                {/* iPhone frame */}
                <div className="relative mx-auto rounded-[2.5rem] border border-gray-300 bg-black shadow-xl overflow-hidden aspect-[9/19.5]">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/80 flex items-center justify-center z-10">
                    <div className="h-2 w-10 rounded-full bg-gray-800" />
                  </div>
                  {/* Video - explicitly fill container so it renders in embedded context */}
                  {videoError ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 text-white p-4 text-center text-sm">
                      <p className="font-medium mb-2">Video unavailable</p>
                      <p className="text-white/80">Add WALKTHROUGH.MP4 to the public folder</p>
                    </div>
                  ) : (
                    <div className="absolute inset-0">
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/WALKTHROUGH.MP4"
                        controls
                        playsInline
                        preload="auto"
                        onError={() => setVideoError(true)}
                      />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-xs text-gray-500">
                  Vende Más walkthrough recorded from the Expo mobile app.
                </p>
              </div>
            </motion.div>

            {/* Project Overview */}
            <motion.div
              ref={overviewRef}
              initial="initial"
              animate={overviewInView ? 'animate' : 'initial'}
              variants={fadeInLeft}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white rounded-md shadow-md p-6 md:p-8 border-2 border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Vende Más is a cross-platform mobile app (built with Expo + React Native) that acts as a growth assistant
                for local businesses and solo service providers. It is my current side project and focuses on helping owners
                actually execute their marketing and sales tasks instead of leaving ideas in a notebook.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Under the hood it combines authentication, a rich business profile, onboarding flows, and a
                growth checklist so users move from creating their first post to sharing it, collecting their
                first leads, and closing real bookings. Supabase stores the profile and auth state, while the
                app keeps track of progress on-device to make growth feel concrete and achievable.
              </p>
            </motion.div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[15px] leading-relaxed">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                ref={featuresRef}
                initial="initial"
                animate={featuresInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What the App Covers</h2>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate={featuresInView ? 'animate' : 'initial'}
                  className="space-y-4"
                >
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Guided growth journey</h3>
                    <p className="text-gray-600 text-sm">
                      The app tracks key milestones like creating a first post, sharing it, getting a first lead,
                      and closing a booking, so business owners can see clear progress instead of vague &quot;work on marketing&quot; tasks.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business profile as a system</h3>
                    <p className="text-gray-600 text-sm">
                      A structured profile in Supabase captures business name, services, target customer, tone, languages,
                      booking preferences, and more, all of which can be reused across content, offers, and outreach.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding & account flows</h3>
                    <p className="text-gray-600 text-sm">
                      An auth group, app group, and onboarding screens make sure new users land in the right place:
                      welcome, sign up / sign in, profile setup, onboarding, then the main app tabs once they&apos;re ready.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                ref={techRef}
                initial="initial"
                animate={techInView ? 'animate' : 'initial'}
                variants={fadeInLeft}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-md shadow-md p-8 border-2 border-gray-100 space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Approach</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vende Más is built with Expo Router on top of React Native and TypeScript, using route groups like
                  <code className="mx-1 text-xs bg-gray-100 px-1 py-0.5 rounded"> (auth)</code> and
                  <code className="mx-1 text-xs bg-gray-100 px-1 py-0.5 rounded"> (app)</code> to separate authentication,
                  onboarding, and the main in-app experience. An <code className="mx-1 text-xs bg-gray-100 px-1 py-0.5 rounded">AuthGate</code> component
                  controls navigation based on Supabase session, whether the profile is complete, and if onboarding has been seen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Supabase provides authentication and a typed <code className="mx-1 text-xs bg-gray-100 px-1 py-0.5 rounded">profiles</code> table that stores rich business data,
                  while AsyncStorage powers the local growth checklist and onboarding flags. The UI is built with Tamagui,
                  theming hooks, and React Navigation primitives, and the app is wired for localization with
                  <code className="mx-1 text-xs bg-gray-100 px-1 py-0.5 rounded">i18next</code> so it can support multiple languages as it grows.
                </p>

                {/* Growth Checklist Callout */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3"
                >
                  <h3 className="text-sm font-semibold text-green-900 mb-1">
                    Growth checklist inside the app
                  </h3>
                  <p className="text-xs text-green-900/80 mb-2">
                    Vende Más tracks a simple set of milestones so owners can see real progress:
                  </p>
                  <ul className="text-xs text-green-900/90 space-y-1 list-disc list-inside">
                    <li>First post created</li>
                    <li>First post shared</li>
                    <li>First lead captured</li>
                    <li>First booking closed</li>
                  </ul>
                </motion.div>

                {/* Why mobile, not just web */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Why mobile instead of just another web app?
                  </h3>
                  <p className="text-xs text-gray-700">
                    For the small businesses Vende Más serves, most real work happens on the phone, between bookings,
                    on the go, and often with spotty laptop access. Building this as a mobile-first Expo app lets me
                    tie growth systems (onboarding, checklists, notifications) directly into the device they actually use,
                    which is exactly how I think about growth engineering: design the system around real behavior, not
                    around what&apos;s easiest to ship.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial="initial"
              animate={sidebarInView ? 'animate' : 'initial'}
              variants={fadeInRight}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-md shadow-md p-6 border-2 border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Project</span>
                    <p className="text-gray-900">Vende Más</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Type</span>
                    <p className="text-gray-900">Cross-platform mobile app (Expo + React Native)</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Audience</span>
                    <p className="text-gray-900">Small businesses & sellers</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Repo</span>
                    <p className="text-gray-900">Separate repository</p>
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
                  animate={sidebarInView ? 'animate' : 'initial'}
                  className="flex flex-wrap gap-2"
                >
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Expo Router
                  </motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    React Native
                  </motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    TypeScript
                  </motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Supabase
                  </motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Tamagui
                  </motion.span>
                  <motion.span variants={fadeInUp} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    i18next
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-green-600 hover:text-green-800"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default VendeMasPage;
