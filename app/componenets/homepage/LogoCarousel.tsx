import React from 'react'

interface LogoCarouselProps {
  mode: 'dev' | 'martech';
}

const LogoCarousel = ({ mode }: LogoCarouselProps) => {
    const devLogos = [
        {
            src: '/tech/react.svg',
            alt: 'React',
        },
        {
          src: '/tech/ai.svg',
          alt: 'AI',
      },
        {
            src: '/tech/nextjs.svg',
            alt: 'Next.js',
        },
        {
            src: '/tech/tailwind.svg',
            alt: 'Tailwind CSS',
        },
        {
            src: '/tech/typescript.svg',
            alt: 'TypeScript',
        },
        {
            src: '/tech/nodejs.svg',
            alt: 'Node.js',
        },
        {
            src: '/tech/git.svg',
            alt: 'Git',
        },
        {
          src: '/tech/reactnative.svg',
          alt: 'React Native',
      }
    ];

    const martechLogos = [
        {
            src: '/martech/salesforce.svg',
            alt: 'Salesforce Marketing Cloud',
        },
        {
            src: '/martech/oracle.svg',
            alt: 'Oracle Responsys',
        },
        {
            src: '/martech/mailchimp.svg',
            alt: 'Mailchimp',
        },
        {
            src: '/martech/jira.svg',
            alt: 'Jira',
        },
        {
            src: '/martech/figma.svg',
            alt: 'Figma',
        },
        {
            src: '/martech/html.svg',
            alt: 'HTML',
        },
        {
            src: '/martech/CSS.svg',
            alt: 'CSS',
        },
        {
            src: '/martech/js.svg',
            alt: 'JavaScript',
        },
        {
            src: '/martech/cordial.svg',
            alt: 'Cordial Marketing Plt.',
        },
        {
            src: '/martech/emailonacid.svg',
            alt: 'Email On Acid',
        },
        {
            src: '/martech/photoshop.svg',
            alt: 'Photoshop',
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
                            className="group relative inline-flex items-center justify-center h-10 w-[60px] md:w-[100px] shrink-0 hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-300"
                            />
                            <p className={`pointer-events-none absolute inset-0 flex items-center justify-center text-lg text-black ${mode==='dev' ? 'bg-black text-white': ' bg-[#f5984b] '} rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100`}>{logo.alt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoCarousel
