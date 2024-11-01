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
import ProjectData from '../../projectdata.json';

const ProjectCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {ProjectData.map((project) => {
        let liveBtn;

        if (project.link === '') {
          liveBtn = (
            <span className="icon-[tabler--error-404] text-2xl text-red-600"></span>
          );
        } else {
          liveBtn = (
            <a href={project.link} target="_blank">
              <span className="icon-[ph--globe] hover:text-green-500 text-2xl"></span>
            </a>
          );
        }

        return (
          <div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex justify-center mb-4"
          >
            <Card className="p-5 rounded-2xl bg-gray-800 w-full">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="rounded-xl w-full"
                  src={project.image}
                  width={800}
                />
                <CardFooter className="flex flex-row gap-2">
                  <Tooltip content="Github-Repo">
                    <a href={project.github} target="_blank">
                      <span className="icon-[skill-icons--github-dark] text-2xl hover:text-green-500"></span>
                    </a>
                  </Tooltip>
                  <Tooltip content="Live Site">{liveBtn}</Tooltip>
                </CardFooter>

                <CardHeader className="pb-0 pt-2 px-2 flex-col items-start gap-1 text-white">
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

