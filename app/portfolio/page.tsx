import React from 'react';
import Header from '../componenets/portfoliopage/header';
import ProjectCard from '../componenets/portfoliopage/projectcard';
import { CardMotion } from '../componenets/portfoliopage/cardmotion';
import ContactButton from '../componenets/portfoliopage/button';
const Portfolio = () => {
  return (
    <div>
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <Header />
      </div>

      <ProjectCard />
      <ContactButton />
    </div>
  );
};

export default Portfolio;
