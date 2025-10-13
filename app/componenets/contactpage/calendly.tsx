'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

import Ologo from '@/public/ol-logo.png'
const CalendlyForm = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {

      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="flex items-start justify-center">
      <Image
        src={Ologo}
        alt="sas logo"
        height={150}
        width={150}
        className="text-center mb-5 object-cover"
      />
    </div>
      <div className="w-full mx-auto" style={{ maxWidth: '1200px' }}>
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/oscarleal/one-on-one-w-oscar?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  )
}

export default CalendlyForm

