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
    <div className="w-full bg-white py-14">
    <div className="flex items-start justify-center">
      <Image
        src={Ologo}
        alt="sas logo"
        height={150}
        width={150}
        className="text-center mb-5 object-cover"
      />
    </div>
      <div 
        className="calendly-inline-widget w-full h-[700px] sm:h-[800px]"
        data-url="https://calendly.com/oscarleal/one-on-one-w-oscar?hide_gdpr_banner=1"
      />
    </div>
  )
}

export default CalendlyForm

