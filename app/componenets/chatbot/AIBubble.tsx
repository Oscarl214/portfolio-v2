'use client';
import React, { useState } from 'react';
import { Image } from '@nextui-org/react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { Spinner } from '@nextui-org/react';

import { FaRegCircleXmark } from 'react-icons/fa6';
interface AIBubbleProps {
  isChatVisible: boolean;
  toggleChat: () => void;
}

const AIBubble: React.FC<AIBubbleProps> = ({ isChatVisible, toggleChat }) => {
  const [response, setResponse] = useState<string>(
    'Hi there! How can I assist you?'
  );
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<string>('');

  const [chatHistory, setChatHistory] = useState<
    Array<{ question: string; response: string }>
  >([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value || '');
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/chatAI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const chatresponse = result.choices[0].message.content;
        setQuestion(question);

        setChatHistory((prev) => [
          ...prev,
          { question: question, response: chatresponse },
        ]);
        setResponse(chatresponse);
        setQuestion('');
      } else {
        console.error('Failed to ask question');
      }
    } catch (error) {
      console.error('Error submitting Item:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isChatVisible) return null;

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 md:bottom-0 md:left-[300px]  p-4">
      <div className="artboard phone-2  bg-black rounded-md w-full max-w-md h-full max-h-[800px] flex flex-col ">
        <FaRegCircleXmark
          className="text-2xl cursor-pointer m-2 text-white hover:text-green-500 "
          onClick={toggleChat}
        />
        <div className="flex justify-center items-center p-5">
          <Image
            alt="Chat Avatar"
            src="https://newportv2.s3.us-east-2.amazonaws.com/ChatAvat.png"
            height={250}
            width={250}
            className="rounded-full bg-green-700 animate-pulse"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          <div className="flex flex-col chat chat-start">
            {loading ? (
              <Spinner color="success" className="ml-4" />
            ) : (
              chatHistory.map((chat, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="flex flex-col items-start chat-bubble chat-bubble-success m-4">
                    {chat.question}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble bg-white m-4 text-black">
              {response}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-800 flex items-center rounded-md">
          <input
            type="text"
            placeholder="Ask me a question..."
            value={question}
            onChange={onChange}
            className="input input-bordered input-accent w-full"
          />
          <FaRegArrowAltCircleUp
            className="text-3xl text-white ml-2 cursor-pointer hover:text-green-500"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AIBubble;
