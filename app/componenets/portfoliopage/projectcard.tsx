'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import ProjectData from '../../projectdata.json';
import { Button } from '@nextui-org/react';
const ProjectCard = () => {
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-center">
      {ProjectData.map((project) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          key={project.id}
        >
          <Card className="p-5 rounded-2xl sm:w-[350px] w-full bg-gray-800 lg:h-96 lg:overflow-auto">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={project.image}
                width={270}
              />
              <CardFooter className="justify-start  w-full gap-3  absolute   z-10">
                <Tooltip content="Github-Repo">
                  <a href={project.github} target="_blank">
                    <span className="icon-[whh--github] text-2xl hover:text-green-500"></span>
                  </a>
                </Tooltip>
                <Tooltip content="Live Site">
                  <a href={project.link} target="_blank">
                    <span className="icon-[material-symbols--eye-tracking-outline-rounded]  hover:text-green-500 text-2xl"></span>
                  </a>
                </Tooltip>
              </CardFooter>
            </CardBody>

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-5 dark:text-white text-white">
              <h4 className="font-extrabold text-xl text-green-500">
                {project.title}
              </h4>
              <p className="text-sm font-sans">{project.description}</p>
              <small className="text-default-500 text-md flex-wrap leading-5">
                {project.technologies}
              </small>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
