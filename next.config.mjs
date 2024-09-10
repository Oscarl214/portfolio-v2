/**  @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'newportv2.s3.us-east-2.amazonaws.com',
      'portfolioprojectsol.s3.us-east-2.amazonaws.com',
    ],
  },
};

import withVideos from 'next-videos';

export default withVideos(nextConfig);
