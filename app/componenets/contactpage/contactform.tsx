'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { toast } from 'react-hot-toast';
const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setData({
        name: '',
        subject: '',
        email: '',
        message: '',
      });
      toast.success(`Hey ${data.name}, your message was sent successfully!`);
    }
  };
  return (
    <div className=" flex justify-center ">
      <section className=" bg-gray-800 dark:bg-gray-800 rounded lg:w-[400px] w-[400px] ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-500 dark:text-white">
            Contact.
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            GET IN TOUCH
          </p>
          <form action="#" className="space-y-8" onSubmit={sendEmail}>
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your name
              </label>
              <input
                value={data.name}
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Oscar ..."
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                onChange={handleChange}
                value={data.email}
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-white mb-2 text-sm font-medium  dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={data.subject}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Reach out to me for any matter!"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={data.message}
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
            >
              Send message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
