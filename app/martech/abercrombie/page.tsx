import React from 'react'
import Link from 'next/link'
import NFLPreview from '@/public/martech/NFL_Preview_Email.gif'
import JeansPreview from '@/public/martech/Jeans_Preview_Email.gif'
import BlackFridayPreview from '@/public/martech/BFriday_Preview_Email.gif'
import Image from 'next/image'

const AbercrombiePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Abercrombie & Fitch</h1>
          <p className="text-xl text-gray-600">Email Campaign Execution & Development</p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <Image
            src="/martech/A&F.jpg" 
            alt="Abercrombie & Fitch" 
            className="w-full  object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Developed and QA'd responsive HTML email templates for Abercrombie Adults brand within Content Management System, Cordial, 
                ensuring cross-platform compatibility across 1M+ subscribers. This project involved 
                creating sophisticated email campaigns that maintained brand consistency while 
                delivering exceptional user experience across all email clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The work included template development, responsive design implementation, 
                cross-platform testing, and performance optimization to ensure maximum 
                deliverability and engagement rates across multiple regional markets.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Developed responsive HTML email templates from design figma mockups provided by design cross partners.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Ensured cross-platform compatibility across major email clients
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Conducted thorough QA testing for 1M+ subscriber base
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Optimized email performance and deliverability rates
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Maintained brand consistency across all email communications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Created and managed ad hoc segmentation lists for targeted audience campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Uploaded and processed customer data lists for regional and demographic targeting
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Deployed campaigns across multiple regional markets (USCAN, EUUK, Germany, Mexico)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Development</h3>
                  <p className="text-gray-600 text-sm">
                    Created pixel-perfect HTML email templates that rendered consistently 
                    across Outlook, Gmail, Apple Mail, and mobile email clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
                  <p className="text-gray-600 text-sm">
                    Implemented mobile-first responsive design ensuring optimal viewing 
                    experience across all device sizes and screen resolutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                  <p className="text-gray-600 text-sm">
                    Optimized email load times and reduced spam score through 
                    efficient coding practices and image optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">
                    Established comprehensive testing protocols ensuring 99.9% 
                    compatibility across all major email platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Management & Regional Deployment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond email development, I managed comprehensive data segmentation and regional deployment 
                strategies to ensure campaigns reached the right audiences in the right markets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Segmentation</h3>
                  <p className="text-gray-600 text-sm">
                    Created ad hoc segmentation lists for targeted campaigns, including demographic, 
                    behavioral, and geographic targeting to maximize campaign effectiveness.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Uploaded and processed customer data lists, ensuring data quality and 
                    compliance with regional privacy regulations across all markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Markets</h3>
                  <p className="text-gray-600 text-sm">
                    Deployed campaigns across USCAN, EUUK, and Mexico markets, 
                    adapting content and timing for regional preferences and regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Localization</h3>
                  <p className="text-gray-600 text-sm">
                    Ensured proper localization of email content, including language adaptation, 
                    currency formatting, and regional compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
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
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">HTML</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Email Marketing</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Responsive Design</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Cross-platform Testing</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Figma</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">PhotoShop</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Cordial</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Data Segmentation</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Regional Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email Examples Section - Full Width */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Examples</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Here are some examples of the email campaigns I developed for Abercrombie & Fitch. 
            Each template was designed to maintain brand consistency while ensuring optimal 
            performance across all email clients and regional markets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example 1 */}
            <div className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={NFLPreview} 
                  alt='NFL Email Preview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </div>

            {/* Example 2 */}
            <div className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={BlackFridayPreview} 
                  alt='Black Friday Email Preview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </div>

            {/* Example 3 */}
            <div className="text-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={JeansPreview} 
                  alt='Jeans Email Preview' 
                  className='w-full h-full object-contain'
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Technical Highlights</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Cross-platform compatibility tested across 20+ email clients</li>
              <li>• Mobile-responsive design with breakpoints for all device sizes</li>
              <li>• Optimized for accessibility and screen readers</li>
              <li>• Fast loading times with compressed images and efficient code</li>
              <li>• Regional deployment across USCAN, EUUK, and Mexico markets</li>
              <li>• Advanced audience segmentation and data management capabilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbercrombiePage
