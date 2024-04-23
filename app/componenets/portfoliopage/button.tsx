import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const ContactButton = () => {
  return (
    <div className="flex justify-center m-5 mt-10">
      <Button
        color="success"
        variant="bordered"
        className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
      >
        <Link href={'/contact'}>Contact</Link>
      </Button>
    </div>
  );
};

export default ContactButton;
