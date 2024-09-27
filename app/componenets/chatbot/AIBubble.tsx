'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Divider, Image } from '@nextui-org/react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { Spinner } from '@nextui-org/react';
import Typed from 'typed.js';
import { FaRegCircleXmark } from 'react-icons/fa6';
interface AIBubbleProps {
  isChatVisible: boolean;
  toggleChat: () => void;
}

const AIBubble: React.FC<AIBubbleProps> = ({ isChatVisible, toggleChat }) => {
  const [response, setResponse] = useState<string>(
    'Hi there! I am Oscars personal AI bot. Feel free to ask anything relating to Oscars achievements, skills, interests, or career goals.'
  );
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<string>('');

  const [chatHistory, setChatHistory] = useState<
    Array<{ question: string; response: string }>
  >([]);

  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [`${response}`],
      typeSpeed: 90,
      backSpeed: 90,
    };
    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [response]);

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
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className="artboard phone-2 bg-black rounded-md w-full max-w-md h-[400px] max-h-[800px] flex flex-col">
        <FaRegCircleXmark
          className="text-2xl cursor-pointer m-2 text-white hover:text-green-500"
          onClick={toggleChat}
        />
        <div className="flex justify-center items-center p-5">
          {loading ? (
            <Image
              alt="Chat Avatar Thinking"
              src="https://newportv2.s3.us-east-2.amazonaws.com/Me-Thinking.png"
              height={250}
              width={250}
              className="rounded-full animate-pulse"
            />
          ) : (
            <Image
              alt="Chat Avatar Idea"
              src="https://newportv2.s3.us-east-2.amazonaws.com/ChatAvat.png"
              height={250}
              width={250}
              className="rounded-full animate-pulse"
            />
          )}
        </div>
        <Divider className="bg-green-500 text-center" />
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
            <div
              className="chat-bubble bg-white m-4 text-black"
              ref={typingRef}
            ></div>
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
