import React from 'react';
import Header from './portfoliopage/header';
import ProjectCard from './portfoliopage/projectcard';
import ContactButton from './portfoliopage/button';
import ContactTyping from './contactpage/ContactTyping';
const ProjectSection = () => {
  return (
    <div>
      <div className=" pt-6 header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <Header />
      </div>
      <ProjectCard />
    </div>
  );
};

export default ProjectSection;
