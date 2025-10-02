'use client';
import React, { useState, useEffect } from 'react';
import { Image } from '@nextui-org/react';
import dayjs from 'dayjs';
import Loading from './loading';
import { useRouter } from 'next/navigation';
interface Blog {
  id: string;
  title: string;
  content: string[];
  tags: string[];
  status: string;
  images: string[];
  createdAt: string;
  author: string;
  updatedAt: string;
}
const BlogCard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/api/callBlogs', {
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data.BlogData);
      } catch (error) {
        console.error('Error fetching blog data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleBlogClick = (id: string) => {
    router.push(`/blog/${id}`);
  };
  return (
    <div>
      <section className="py-3 ">
        <div className="mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center mb-10 font-sans">
            Blogs written by me with topics ranging from: tech, life, &
            interests.
          </p>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-center lg:gap-x-8">
            {blogs.map((blog) => (
              <div
                className="group cursor-pointer w-full max-lg:max-w-xl  md:w-1/2 border border-gray-300 rounded-2xl p-5 transition-all duration-300 md:hover:border-green-500"
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
              >
                <div className="flex items-center mb-6">
                  {blog.images.length > 0 && (
                    <Image
                      src={blog.images[0]}
                      alt={`${blog.title} image`}
                      className="rounded-lg w-full object-cover"
                    />
                  )}
                </div>
                <div className="block">
                  <h3 className='font-medium leading-8 mb-9"'>{blog.title}</h3>
                  {/* <h4 className=" font-medium font-sans leading-8 mb-9">
                    {blog.title}
                  </h4> */}
                  <div className="flex items-center justify-between font-medium mt-4">
                    {/* <h6 className="text-sm">{blog.author}</h6> */}
                    <div className="flex flex-col gap-4">
                      <span className="text-sm text-green-500 text-end">
                        {dayjs(blog.createdAt).format('MM/DD/YYYY')}
                      </span>
                      <div className="flex gap-1 flex-wrap">
                        {blog.tags.map((tag: any, index: any) => (
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
                          blog.status === 'published'
                            ? 'text-sm text-green-500 text-end'
                            : 'text-sm text-orange-500 text-end'
                        }
                      >
                        {blog.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <a
            href="#"
            className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
          >
            View All
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
