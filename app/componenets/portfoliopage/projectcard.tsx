'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import ProjectData from '../../projectdata.json';

const TECH_ICONS: Record<string, string> = {
  'Next.js': 'icon-[skill-icons--nextjs-dark]',
  'React': 'icon-[skill-icons--react-dark]',
  'TypeScript': 'icon-[skill-icons--typescript]',
  'TailwindCSS': 'icon-[skill-icons--tailwindcss-dark]',
  'Vercel': 'icon-[skill-icons--vercel-dark]',
  'Framer Motion': 'icon-[devicon--framermotion]',
  'Prisma': 'icon-[skill-icons--prisma]',
  'MongoDB': 'icon-[skill-icons--mongodb]',
  'Three.js': 'icon-[skill-icons--threejs-dark]',
  'AWS': 'icon-[skill-icons--aws-dark]',
  'S3': 'icon-[skill-icons--aws-dark]',
  'Stripe': 'icon-[logos--stripe]',
  'GSAP': 'icon-[logos--greensock-icon]',
  'Node.js': 'icon-[skill-icons--nodejs-dark]',
  'Git': 'icon-[skill-icons--git]',
};

function TechBadge({ name }: { name: string }) {
  const iconClass = TECH_ICONS[name];

  if (iconClass) {
    return (
      <Tooltip content={name}>
        <span className={`${iconClass} text-2xl shrink-0`} />
      </Tooltip>
    );
  }

  return (
    <Tooltip content={name}>
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-white/70 border border-white/10 shrink-0">
        {name}
      </span>
    </Tooltip>
  );
}

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {ProjectData.map((project, index) => {
        const isFeatured = index === 0;

        let liveBtn;
        if (project.link === '') {
          liveBtn = (
            <span className="icon-[tabler--error-404] text-2xl text-red-600"></span>
          );
        } else {
          liveBtn = (
            <a href={project.link} target="_blank">
              <span className="icon-[ph--globe] md:hover:text-green-500 text-2xl"></span>
            </a>
          );
        }

        return (
          <div
            key={project.id}
            className={`w-full ${isFeatured ? 'md:col-span-2' : ''}`}
          >
            <Card className="p-5 rounded-md bg-transparent w-full border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardBody className="overflow-visible py-2 gap-3">
                <Image
                  alt={project.title}
                  className={`rounded-sm w-full ${isFeatured ? 'max-h-[420px] object-cover' : ''}`}
                  src={project.image}
                  width={isFeatured ? 1200 : 800}
                />

                <CardHeader className="pb-0 pt-2 px-2 flex-col items-start gap-2 text-white">
                  <h4 className="font-extrabold text-xl text-green-500">
                    {project.title}
                  </h4>
                  <p className="text-sm font-sans text-white/80 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </CardHeader>

                <div className="flex flex-wrap items-center gap-2 px-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <CardFooter className="flex flex-row gap-3 pt-1">
                  {project.github && (
                    <Tooltip content="Github Repo">
                      <a href={project.github} target="_blank">
                        <span className="icon-[skill-icons--github-dark] text-2xl md:hover:text-green-500"></span>
                      </a>
                    </Tooltip>
                  )}
                  <Tooltip content="Live Site">{liveBtn}</Tooltip>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
