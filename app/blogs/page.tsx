import React from 'react';
import BlogHeader from '../componenets/blogpage/typing';
import BlogCard from '../componenets/blogpage/blogcard';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
const Blogs = () => {
  return (
    <div className="project-container">
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <BlogHeader />
      </div>
      <div>
        <BlogCard />
      </div>
      <div className="ml-4">
        <Link href={'/'}>
          <Button
            color="success"
            variant="bordered"
            className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
