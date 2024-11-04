'use client';
import { Image } from '@nextui-org/react';

import { motion } from 'framer-motion';
import { Motion } from './componenets/aboutpage/motion';
import Intro from './componenets/aboutpage/intro';

import ChatBot from './componenets/chatbot/chatbot';
import AboutSection from './componenets/aboutsection';
import ProjectSection from './componenets/projectssection';
import ContactSection from './componenets/contactsection';
import SingleBlogCard from './componenets/blogpage/singleblogcard';
export default function Home() {
  return (
    <main className="min-h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen w-full snap-start flex flex-col justify-center items-center relative px-4"
        id="intro"
      >
        <div className="flex flex-col justify-around items-center w-full max-w-4xl mx-auto gap-5">
          <motion.div
            className="rounded-full "
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              isZoomed
              width={300}
              alt="Me"
              src="/Me.JPG"
              className="w-[200px] md:w-[300px] h-auto object-cover mb-10"
            />
          </motion.div>
          <Motion>
            <Intro />
          </Motion>
          <SingleBlogCard />
        </div>
      </section>

      <ChatBot />

      {/* About Section */}
      <section
        className="min-h-screen w-full snap-start flex items-center justify-center px-4"
        id="about"
      >
        <div className="w-full max-w-4xl mx-auto">
          <AboutSection />
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen w-full snap-start flex items-center justify-center px-4"
      >
        <div className="w-full max-w-4xl mx-auto">
          <ProjectSection />
        </div>
      </section>
      {/*Contact Section */}
      <section
        id="contact"
        className="min-h-screen w-full snap-start flex items-center justify-center px-4"
      >
        <div className="w-full max-w-4xl mx-auto">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
