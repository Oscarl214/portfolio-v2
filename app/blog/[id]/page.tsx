'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Loading from '@/app/componenets/blogpage/loading';
import dayjs from 'dayjs';
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

const Blog = () => {
  const { id } = useParams();

  console.log('params', id);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/callBlogID/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: Blog = await response.json();
      setBlog(data);
    };
    //test

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      {' '}
      <div className="container mx-auto py-10 px-4 lg:px-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-600">
            Written by <span className="font-medium">{blog.author}</span> on{' '}
            {dayjs(blog.createdAt).format('MMMM D, YYYY')}
          </p>
          <p className="text-sm text-gray-500">
            Last updated on {dayjs(blog.updatedAt).format('MMMM D, YYYY')}
          </p>

          {/* {blog.images.length > 0 && (
            <div className="mt-6">
              <Image
                src={blog.images[0]}
                alt={blog.title}
                width={800}
                height={450}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          )} */}
        </section>

        <article className="prose lg:prose-lg mx-auto mb-12">
          {blog.content.map((paragraph, index) => (
            <div key={index} className="mb-6">
              {blog.images[index] && (
                <Image
                  src={blog.images[index]}
                  alt={`Image for paragraph ${index}`}
                  width={500}
                  height={250}
                  className="mx-auto rounded-lg shadow-lg mt-4"
                />
              )}
              <p className="text-lg leading-relaxed p-2 font-sans">
                {paragraph}
              </p>
            </div>
          ))}
        </article>

        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="mt-4 text-gray-600">Written by: {blog.author}</p>
          <p className="mt-2 text-gray-500">
            Full-time blogger and tech enthusiast.
          </p>
        </section>
      </div>
      <div>
        {' '}
        <div className="flex flex-col gap-2 justify-center m-5 mt-10">
          <Button
            color="success"
            variant="bordered"
            className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
          >
            <Link href={'/blogs'}>Back to Blogs</Link>
          </Button>
          <Button
            color="success"
            variant="bordered"
            className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
          >
            <Link href={'/portfolio'}>Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
