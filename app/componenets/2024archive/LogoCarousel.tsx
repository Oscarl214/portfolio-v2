import React from 'react'

const LogoCarousel = () => {


    const duplicatedLogos=[
      
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
            {
              src: '/AF.png',
              alt: 'Abercrombie & Fitch logo',
            },
        ];


  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-[60px] max-w-full max-h-full flex items-center mask-gradient">
        <div className="flex gap-20 animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-10 shrink-0"
              style={{
                width: '175px',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
