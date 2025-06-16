import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  topics: string;
  owner: {
    avatar_url: string;
  };
}

interface RepoCardProps {
  repos: Repo[];
}

const RepoCard: React.FC<RepoCardProps> = ({ repos }) => {
  return (
    <div className="overflow-auto">
      <h2 className=" lg:text-center lg:text-3xl text-center text-green-500 text-2xl font-extrabold mt-5 ">
        Latest Repos
      </h2>
      <div className="flex flex-wrap lg:wrap-none flex-row justify-around">
        {repos.map((repo) => (
          <Card
            className="max-w-[340px] mt-10 bg-gray-800 text-white"
            key={repo.id}
          >
            <CardHeader className="justify-between text-white">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={repo.owner.avatar_url}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none ">
                    {repo.name}
                  </h4>
                  <h5 className="text-xs tracking-tight text-default-400">
                    <a className="text-green-500">Created At: </a>
                    {repo.created_at}
                  </h5>
                </div>
              </div>
              <Link href={repo.html_url} target="_blank">
                <Button
                  className="hover:bg-white hover:text-green-500"
                  color="success"
                  radius="full"
                  size="sm"
                >
                  Live
                </Button>
              </Link>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small font-sans ">
              <p>{repo.description}</p>
              <span className="pt-2 text-default-400">
                #{repo.topics}
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  <a className="text-green-500">Last Push: </a>
                  {repo.pushed_at}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RepoCard;
