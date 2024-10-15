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
      {ProjectData.map((project) => {
        let liveBtn;

        if (project.link === '') {
          liveBtn = (
            <span className="icon-[tabler--error-404] text-2xl text-red-600"></span>
          );
        } else {
          liveBtn = (
            <a href={project.link} target="_blank">
              <span className="icon-[ph--globe]  hover:text-green-500 text-2xl "></span>
            </a>
          );
        }

        return (
          <div
            key={project.id}
            className="flex justify-center mb-4 gap-y-4 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-center lg:gap-x-4"
          >
            <Card className="p-5 rounded-2xl sm:w-[350px] w-full bg-gray-800  lg:overflow-auto lg:h-auto lg:w-[500px] ">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className=" rounded-xl w-full"
                  src={project.image}
                  width={800}
                />
                <CardFooter className="flex flex-row gap-2">
                  <Tooltip content="Github-Repo">
                    <a href={project.github} target="_blank">
                      <span className="icon-[skill-icons--github-dark] text-2xl  hover:text-green-500 "></span>
                      {/* <span className="icon-[whh--github] text-2xl  hover:text-green-500"></span> */}
                    </a>
                  </Tooltip>
                  <Tooltip content="Live Site">{liveBtn}</Tooltip>
                </CardFooter>

                <CardHeader className="pb-0 pt-2 px-2 flex-col items-start gap-1 dark:text-white text-white">
                  <h4 className="font-extrabold text-xl text-green-500">
                    {project.title}
                  </h4>
                  <p className="text-sm font-sans">{project.description}</p>
                  <small className="text-default-500 text-md flex-wrap leading-5">
                    {project.technologies}
                  </small>
                </CardHeader>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
