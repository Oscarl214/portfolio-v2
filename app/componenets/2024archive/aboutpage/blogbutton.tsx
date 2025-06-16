import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const BlogButton = () => {
  return (
    <div>
      {' '}
      <div className="flex justify-center m-2">
      <Link href={'/blogs'}>
        <Button
          color="success"
          variant="bordered"
          className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
        >
          Check Out my Blogs
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogButton;
