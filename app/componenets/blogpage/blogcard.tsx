import React from 'react';
import { Image } from '@nextui-org/react';
const BlogCard = () => {
  return (
    <div>
      <section className="py-3 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center mb-10 font-sans">
            Blogs written by me with topics ranging from: tech, life, &
            interests.
          </p>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Blog Post 1 */}
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-green-500">
              <div className="flex items-center mb-6">
                <Image
                  src="https://pagedone.io/asset/uploads/1696244553.png"
                  alt="Harsh image"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className=" font-medium font-sans leading-8 mb-9">
                  Fintech 101: Exploring the Basics of Electronic Payments
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm">By Me</h6>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-green-500">
                      Date Published
                    </span>
                    <span className="text-sm text-orange-500">Topic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
          >
            View All
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
