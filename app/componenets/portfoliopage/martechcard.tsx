import React from 'react'
import Link from 'next/link'
import martechData from '@/app/martechdata.json'
import Image from 'next/image'

const MarTechCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {martechData.map((project) => (
        <Link 
          key={project.id}
          href={project.link}
          className="block relative"
        >
          <div 
            className={`${
              project.id === 1 
                ? "bg-white blur-sm opacity-50" 
                : "bg-white"
            } rounded-md shadow-md md:hover:shadow-lg transition-all duration-300 md:hover:scale-[1.02] overflow-hidden cursor-pointer border-2 border-martech-200 md:hover:border-martech-500`}
          >
            {/* Background Image */}
            <div className="h-48 overflow-hidden">
              <Image
                src={project.image} 
                height={500}
                width={500}
                alt={project.title}
                className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Text Content Below Image */}
            <div className="p-6 space-y-3">
              <h3 className="text-martech-900 text-xl font-bold leading-tight">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-black text-sm leading-relaxed">
                  {project.description}
                </p>
              )}
              {project.technologies && (
                <div className="pt-2">
                  <p className="text-martech-600 text-xs font-medium uppercase tracking-wide">
                    {project.technologies}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* "In The Works" Overlay - Only for project with ID 1 */}
          {project.id === 1 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg z-10">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-martech-200">
                <h2 className="text-2xl font-bold text-martech-900 text-center">
                  In The Works
                </h2>
                <p className="text-sm text-martech-700 text-center mt-1">
                  Coming Soon..
                </p>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export default MarTechCard
