'use client';
import React from 'react';
import { Image } from '@nextui-org/react';

const AIBubble = () => {
  return (
    <div>
      <div>
        <div className="artboard phone-2 dark:bg-white bg-black   z-auto rounded-md ">
          <div className="chat chat-start p-2 m-2">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS chat bubble component"
                  src="https://portfolioprojectsol.s3.us-east-2.amazonaws.com/Me.JPG"
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-green-300">When is Oscars B Day</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end p-2 m-2">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS chat bubble component"
                  src="https://portfolioprojectsol.s3.us-east-2.amazonaws.com/Me.JPG"
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">December 7th!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default AIBubble;
