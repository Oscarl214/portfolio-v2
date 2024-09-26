'use client';
import React, { useState } from 'react';
import { FaRocketchat } from 'react-icons/fa';
import AIBubble from './AIBubble';
const ChatBot = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible((prevState) => !prevState);
  };

  const ShowChat = () => {
    return (
      <div>
        <AIBubble />
      </div>
    );
  };

  return (
    <div>
      <div className="fixed bottom-3 left-4">
        <FaRocketchat
          className="text-4xl cursor-pointer"
          onClick={toggleChat}
        />
        {isChatVisible && <ShowChat />}
      </div>
    </div>
  );
};

export default ChatBot;
