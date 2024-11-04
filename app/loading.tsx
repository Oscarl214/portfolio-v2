import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <Spinner className="flex justify-center items-center" color="success">
      Loading
    </Spinner>
  );
}
