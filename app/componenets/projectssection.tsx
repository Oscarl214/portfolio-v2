import React from 'react';
import Header from './portfoliopage/header';
import Link from 'next/link';

const ProjectSection = () => {
  return (
    <Link
      href="/projects"
      className="block transition-all duration-300 hover:scale-105"
    >
      <div
        className="text-center border-2 border-green-500 rounded-lg p-8 m-4 
        hover:shadow-lg hover:shadow-green-300/50 
        bg-gradient-to-r from-gray-900 to-gray-800 
        cursor-pointer"
      >
        <div className="font-bold lg:text-6xl text-4xl text-green-500">
          <Header />
        </div>
      </div>
    </Link>
  );
};

export default ProjectSection;
