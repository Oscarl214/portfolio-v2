import React from 'react';
import { Spinner } from '@nextui-org/react';
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="lg" color="success" />
    </div>
  );
};

export default Loading;
