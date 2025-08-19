'use client';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

import { PageTransition } from './motionanimations/pagetransition';

import ChatBot from './componenets/chatbot/chatbot';

import ProjectCard from './componenets/portfoliopage/projectcard';
import BussinessCard from './componenets/homepage/businesscard';

import HomePageContent from './componenets/homepage/homepageContent';

interface Image {
  src: string
}
//ccomments
export default function Home() {

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

//