'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="mt-5">
      <div>
        <h2 className=" lg:text-start lg:text-3xl text-green-500 text-2xl font-extrabold ml-3 ">
          My Experience
        </h2>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical  lg:mt-10">
          <li className="">
            <div className="timeline-middle lg:m-5">
              <span className="icon-[whh--student] h-10 w-10"></span>
            </div>

            <div className=" lg:timeline-start timeline-end m-5 md:text-end mb-10 ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-bold text-orange-500 collapse-title">
                  Graduated from The University of Texas
                </div>
                <a className="font-sans text-md ">
                  <p>
                    Graduated from University with dual degrees in Corporate
                    Communications and Arts & Entertainment Technologies, where
                    I first got introduced to coding.
                  </p>
                </a>
              </motion.div>
            </div>

            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle lg:m-5">
              <span className="icon-[logos--oracle] h-10 w-10 lg:h-10 lg:w-10"></span>
            </div>
            <div className="timeline-end m-5 md:text-start mb-10 ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">2022</time>
                <div className="text-lg  font-black">
                  Digital Marketing Specialist at{' '}
                  <a className="text-red-500">Oracle</a>{' '}
                </div>
                <p className="font-sans text-md">
                  Following graduation, I interned with Oracle, where I joined
                  the Global Alliance Partner Marketing Team for an eight-week
                  internship program. This experience honed my skills in project
                  management, collaboration, and creativity. I contributed to
                  the Deloitte partnership by leveraging my coding knowledge to
                  create promotional materials, design webpages, and enhance
                  digital assets.
                </p>
              </motion.div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle lg:m-5">
              <span className="icon-[material-symbols--code-blocks] h-10 w-10 lg:h-10 lg:w-10"></span>
            </div>
            <div className="lg:timeline-start timeline-end m-5 md:text-end mb-10 ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic md:text-end">2022</time>
                <div className="text-lg font-bold text-blue-500">
                  Full Stack Coding Bootcamp
                </div>
                <p className="font-sans text-md">
                  Following my internship, I gained a {''}
                  <a
                    href="https://drive.google.com/file/d/1ApHq3hPtedXQJRvMUBLMvpttiLvMBEai/view?usp=sharing"
                    target="_blank"
                    className="hover:text-green-500 underline"
                  >
                    certification
                  </a>
                  {''} from completing a six-month, project-intensive,
                  full-stack coding bootcamp, where I learned Agile
                  methodologies and collaborated on full-stack projects.
                  Developed one-page applications and full-stack apps using the
                  MERN stack, and gained proficiency in MySQL, Node.js, and
                  GraphQL.
                </p>
              </motion.div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle  lg:m-5">
              <Image
                src="/abercrombie.svg"
                alt="Logo"
                width="65"
                height="75"
                className="cursor-pointer h-10 w-10 lg:h-10 lg:w-10"
                priority
              />
            </div>
            <div className="timeline-end m-5 mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">2023-Present</time>
                <div className="text-lg font-black">
                  Assistant Email Developer at{' '}
                  <a className="text-[#814f4a]">Abercrombie & Fitch</a>{' '}
                </div>
                <p className="font-sans text-md">
                  Currently employed as an Assistant Email Developer, I
                  primarily work with HTML and CSS modules to execute marketing
                  campaigns. My responsibilities include HTML coding, executing
                  day-to-day digital marketing campaigns, partnering with
                  internal team members for QA, approval, and deployment of
                  campaigns, ensuring that all campaigns deploy as planned,
                  serving as a digital marketing platform end-user expert, and
                  providing guidance around digital channel capabilities.
                </p>
              </motion.div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle lg:m-5">
              <Image
                src="/ol-logo.png"
                alt="Logo"
                width="35"
                height="35"
                className="cursor-pointer h-10 w-10 lg:h-8 lg:w-10"
                priority
              />
            </div>
            <div className="lg:timeline-start timeline-end md:text-end m-5 mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">Present</time>

                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-green-300 bg-transparent"
                >
                  <div className=" collapse-title text-lg font-black">
                    {' '}
                    Free-Lance Developer:{' '}
                    <a className="text-green-500">Os World</a>
                  </div>
                  <div className="collapse-content">
                    <p className="font-sans text-md ">
                      In my spare time, I work as a part-time freelance
                      developer, using Next.js to build user-friendly web
                      applications. I have weekly appointments with clients,
                      where I create websites to increase traffic and drive
                      overall business growth. This experience not only enhances
                      my understanding of marketing but also helps me refine my
                      coding skills.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </li>
          <li>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                Free-Lance Developer: <a className="text-green-500">Os World</a>
              </div>
              <div className="collapse-content">
                <p>
                  In my spare time, I work as a part-time freelance developer,
                  using Next.js to build user-friendly web applications. I have
                  weekly appointments with clients, where I create websites to
                  increase traffic and drive overall business growth. This
                  experience not only enhances my understanding of marketing but
                  also helps me refine my coding skills.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
