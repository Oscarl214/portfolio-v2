import React from 'react'
import ProjectCard from './projectcard'
import { useMode } from '@/app/providers'
import MarTechCard from './martechcard';

const ProjectSection = () => {
  const { mode } = useMode();

  return (
    <section
    className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4"
  >
   <h1 className="font-outfit font-semibold text-[54px] leading-[74.8px] tracking-tighter">{mode ==='dev' ? 'FREE LANCE PROJECTS' : 'PROFESSIONAL WORK'}</h1>
   {mode === 'dev' ? <ProjectCard/> : <MarTechCard /> }
    </section>
  )
}

export default ProjectSection
