import React from 'react'

interface LogoCarouselProps {
  mode: 'dev' | 'martech';
}

const LogoCarousel = ({ mode }: LogoCarouselProps) => {
    const devLogos = [
        {
            src: '/tech/react.svg',
            alt: 'React logo',
        },
        {
          src: '/tech/ai.svg',
          alt: 'AI logo',
      },
        {
            src: '/tech/nextjs.svg',
            alt: 'Next.js logo',
        },
        {
            src: '/tech/tailwind.svg',
            alt: 'Tailwind CSS logo',
        },
        {
            src: '/tech/typescript.svg',
            alt: 'TypeScript logo',
        },
        {
            src: '/tech/nodejs.svg',
            alt: 'Node.js logo',
        },
        {
            src: '/tech/git.svg',
            alt: 'Git logo',
        },
        {
          src: '/tech/reactnative.svg',
          alt: 'React Native logo',
      }
    ];

    const martechLogos = [
        {
            src: '/tech/ai.svg',
            alt: 'AI logo',
        },
        {
            src: '/tech/react.svg',
            alt: 'React logo',
        },
        {
            src: '/tech/nextjs.svg',
            alt: 'Next.js logo',
        },
        {
            src: '/tech/typescript.svg',
            alt: 'TypeScript logo',
        },
        {
            src: '/tech/nodejs.svg',
            alt: 'Node.js logo',
        },
        {
            src: '/tech/git.svg',
            alt: 'Git logo',
        }
    ];

    const techLogos = mode === 'dev' ? devLogos : martechLogos;

    
    const duplicatedLogos = [...techLogos, ...techLogos];

    return (
        <div className="w-full overflow-hidden">
            <div className="relative h-[60px]">
                <div className="absolute flex gap-8 md:gap-20 animate-scroll whitespace-nowrap">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center h-10 w-[60px] md:w-[100px] shrink-0 hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoCarousel
