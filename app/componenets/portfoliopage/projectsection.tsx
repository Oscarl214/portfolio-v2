import React from 'react'
import ProjectCard from './projectcard'

const ProjectSection = () => {
  return (
    <section
    className="flex flex-col items-center justify-center w-full max-w-[656px] gap-[60px] min-h-[580px] p-4"
  >
   <h1 className="font-outfit font-semibold text-[54px] leading-[74.8px] tracking-tighter">My Most Recent <span className="text-primary">Projects</span></h1>
<ProjectCard/>
    </section>
  )
}

export default ProjectSection
