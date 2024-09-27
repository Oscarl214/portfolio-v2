'use client';
import React, { useState } from 'react';
import { FaRocketchat } from 'react-icons/fa';
import AIBubble from './AIBubble';
import { toggle } from '@nextui-org/react';
import Image from 'next/image';
const ChatBot = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible((prevState) => !prevState);
  };

  const ShowChat = () => {
    return (
      <div>
        <AIBubble isChatVisible={isChatVisible} toggleChat={toggleChat} />
      </div>
    );
  };

  return (
    <div>
      <div className="fixed bottom-3 left-4 z-[1000]">
        <Image
          height={70}
          width={70}
          alt="Oscar-Avatar-Laptop"
          className="cursor-pointer  animate-bounce"
          src={'https://newportv2.s3.us-east-2.amazonaws.com/MeLaptop.png'}
          onClick={toggleChat}
        />
        {isChatVisible && <ShowChat />}
      </div>
    </div>
  );
};

export default ChatBot;
