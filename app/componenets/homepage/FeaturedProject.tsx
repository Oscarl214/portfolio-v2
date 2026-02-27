import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import projectData from '@/app/projectdata.json';
import martechData from '@/app/martechdata.json';

interface FeaturedProjectProps {
  mode: 'dev' | 'martech';
}

const FeaturedProject = ({ mode }: FeaturedProjectProps) => {
  const devProject = projectData[0];
  const martechProject = martechData[0];

  const project = mode === 'dev' ? devProject : martechProject;
  const isExternal = mode === 'dev';

  const href = mode === 'dev' ? '/projects' : martechProject.link;

  return (
    <div className="w-full">
      <p className="dark:text-gray-300 text-lg font-semibold mb-4">
        Latest Project:
      </p>
      <Link href={href}>
        <div
          className={`group relative w-full overflow-hidden rounded-md border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
            mode === 'dev'
              ? 'border-gray-200 dark:border-gray-700 hover:border-green-500/50'
              : 'border-martech-200 hover:border-martech-500'
          }`}
        >
          <div className="relative h-48 md:h-56 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 656px) 100vw, 656px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className={`text-xl md:text-2xl font-bold ${
                  mode === 'dev' ? 'text-green-400' : 'text-martech-300'
                }`}
              >
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mt-1 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            </div>
          </div>

          <div
            className={`flex items-center justify-between px-5 py-3 ${
              mode === 'dev'
                ? 'bg-gray-50 dark:bg-gray-900/50'
                : 'bg-martech-50 dark:bg-martech-950/30'
            }`}
          >
            <span
              className={`text-sm font-medium ${
                mode === 'dev'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-martech-600 dark:text-martech-400'
              }`}
            >
              View Project
            </span>
            <IoArrowForward
              className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                mode === 'dev'
                  ? 'text-green-500'
                  : 'text-martech-500'
              }`}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProject;
