'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import dayjs from 'dayjs';

const SingleBlogCard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['lastBlog'],
    queryFn: async () => {
      const response = await fetch('/api/callLastBlog');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.lastBlog;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error)?.message}</div>;
  if (!data) return <div>No blog found</div>;

  console.log('Blog Data:', data);
  return (
    <div>
      <section className="py-3">
        <div className="mx-auto px-4">
          <p className="text-center mb-10">My Latest Blog Post</p>
          <div className="flex justify-center mb-14">
            <div
              className="group cursor-pointer w-full max-lg:max-w-xl md:w-1/2 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-green-500"
              key={data.id}
            >
              {/* <div className="flex items-center mb-6">
                {data.images && data.images.length > 0 && (
                  <Image
                    src={data.images[0]}
                    alt={`${data.title} image`}
                    className="rounded-lg w-full object-cover"
                    width={500}
                    height={500}
                  />
                )}
              </div> */}
              <div className="block">
                <h3 className="font-medium leading-8 mb-9">{data.title}</h3>
                <div className="flex items-center justify-between font-medium mt-4">
                  <div className="flex flex-col gap-4">
                    <span className="text-sm text-green-500 text-end">
                      {dayjs(data.createdAt).format('MM/DD/YYYY')}
                    </span>
                    <div className="flex gap-1 flex-wrap">
                      {data.tags?.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={
                        data.status === 'published'
                          ? 'text-sm text-green-500 text-end'
                          : 'text-sm text-orange-500 text-end'
                      }
                    >
                      {data.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogCard;
