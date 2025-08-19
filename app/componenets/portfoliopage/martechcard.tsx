import React from 'react'
import Link from 'next/link'
import martechData from '@/app/martechdata.json'

const MarTechCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {martechData.map((project) => (
        <Link 
          key={project.id}
          href={project.link}
          className="block"
        >
          <div 
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Text Content Below Image */}
            <div className="p-6 space-y-3">
              <h3 className="text-gray-900 text-xl font-bold leading-tight">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              )}
              {project.technologies && (
                <div className="pt-2">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    {project.technologies}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MarTechCard
