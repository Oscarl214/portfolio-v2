'use client';
import React, { useState } from 'react';
import { FaRocketchat } from 'react-icons/fa';
import AIBubble from './AIBubble';
import { toggle } from '@nextui-org/react';
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
        <FaRocketchat
          className="text-4xl cursor-pointer m-4 dark:text-white text-white"
          onClick={toggleChat}
        />
        {isChatVisible && <ShowChat />}
      </div>
    </div>
  );
};

export default ChatBot;
