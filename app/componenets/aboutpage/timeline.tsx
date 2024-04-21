'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const Timeline = () => {
  return (
    <div>
      <div>
        <h2 className=" lg:text-start lg:text-3xl text-green-500 text-2xl font-extrabold  m-10">
          My Experience
        </h2>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical  lg:mt-10">
          <li className="">
            <div className="timeline-middle lg:m-5">
              <span className="icon-[whh--student] h-5 w-5"></span>
            </div>

            <div className="timeline-start md:text-end mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-bold text-orange-500">
                  Graduated from The University of Texas
                </div>
                <a className="font-sans text-md">
                  Graduated from University with dual degrees in Corporate
                  Communications and Arts & Entertainment Technologies, where I
                  first got introduced to coding.
                </a>
              </motion.div>
            </div>

            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle lg:m-5">
              <span className="icon-[logos--oracle] h-5 w-5 lg:h-10 lg:w-10"></span>
            </div>
            <div className="timeline-end md:text-start mb-10">
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
                  digital assets. This internship not only deepened my
                  understanding of marketing strategies but also strengthened my
                  coding abilities, illustrating the intersection of marketing
                  and coding in todays digital landscape.
                </p>
              </motion.div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle lg:m-5">
              <span className="icon-[material-symbols--code-blocks] h-5 w-5 lg:h-10 lg:w-10"></span>
            </div>
            <div className="timeline-start md:text-end mb-10">
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
                  Following my internship, I graduated and gained a {''}
                  <a
                    href="https://www.linkedin.com/in/oscar-l-8371a512a/overlay/1635539465412/single-media-viewer/?profileId=ACoAAB-1PGsB2qxEtcOuY2wAuCKdZMvSUBCD9cM"
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
            <div className="timeline-middle lg:m-5">
              <Image
                src="/abercrombie.svg"
                alt="Logo"
                width="65"
                height="75"
                className="cursor-pointer h-5 w-5 lg:h-10 lg:w-10"
                priority
              />
            </div>
            <div className="timeline-end mb-10">
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
                src="/ol-nobg.svg"
                alt="Logo"
                width="55"
                height="65"
                className="cursor-pointer h-5 w-5 lg:h-10 lg:w-10"
                priority
              />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <time className="font-mono italic">Present</time>
                <div className="text-lg font-black">
                  {' '}
                  Free-Lance Developer:{' '}
                  <a className="text-green-500">O's World</a>
                </div>
                <p className="font-sans text-md ">
                  In my spare time, I work as a part-time freelance developer,
                  using Next.js to build user-friendly web applications. I have
                  weekly appointments with clients, where I create websites to
                  increase traffic and drive overall business growth. This
                  experience not only enhances my understanding of marketing but
                  also helps me refine my coding skills.
                </p>
              </motion.div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-center m-5 ">
        <Button
          color="success"
          variant="bordered"
          className="dark:hover:text-white"
        >
          <Link href={'/portfolio'}>Portfolio</Link>
        </Button>
      </div>
    </div>
  );
};

export default Timeline;
