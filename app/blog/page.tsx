import React from 'react';
import BlogHeader from '../componenets/blogpage/typing';
import BlogCard from '../componenets/blogpage/blogcard';
const Blog = () => {
  return (
    <div>
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <BlogHeader />
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
