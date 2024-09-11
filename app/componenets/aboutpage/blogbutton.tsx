import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const BlogButton = () => {
  return (
    <div>
      {' '}
      <div className="flex justify-center m-2">
        <Button
          color="success"
          variant="bordered"
          className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
        >
          <Link href={'/blogs'}>Check Out my Blogs</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogButton;
