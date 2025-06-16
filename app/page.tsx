'use client';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Motion } from './componenets/2024archive/aboutpage/motion';
import Intro from './componenets/2024archive/aboutpage/intro';
import { PageTransition } from './motionanimations/pagetransition';

import ChatBot from './componenets/chatbot/chatbot';
import AboutSection from './componenets/2024archive/aboutsection';
import ProjectSection from './componenets/projectssection';
import ContactSection from './componenets/2024archive/contactsection';
import SingleBlogCard from './componenets/blogpage/singleblogcard';
import RepoSection from './componenets/reposection';
import { RepoMotion } from './componenets/2024archive/aboutpage/repomotion';
import ProjectCard from './componenets/portfoliopage/projectcard';
import BussinessCard from './componenets/homepage/businesscard';

import HomePageContent from './componenets/homepage/homepageContent';

interface Image {
  src: string
}
//ccomments
export default function Home() {
  let arr = [1, 2, 3, 4, -5, 6, -7, 8, 0, 100];

  const PlusMinus = async (arr: number[]) => {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach((item) => {
      if (item < 0) {
        negative++;
      } else if (item > 0) {
        positive++;
      } else {
        zero++;
      }
    });

    const arrLength = arr.length;
    console.log((positive / arrLength).toFixed(6));
    console.log((negative / arrLength).toFixed(6));
    console.log((zero / arrLength).toFixed(6));
  };

  PlusMinus(arr);

  return (
    <PageTransition>
      <main className="flex flex-row justify-center lg:items-center min-h-screen w-full gap-8 lg:px-4 flex-wrap">
        <BussinessCard />
        <section>
          <HomePageContent/>
        </section>
        <ChatBot />
      </main>
    </PageTransition>
  );
}
