'use client';
import React, { useState } from 'react';
import { Image } from '@nextui-org/react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const AIBubble = () => {
  const [response, setResponse] = useState<string>(
    'Hi there! How can I assist you?'
  );
  const [question, setQuestion] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value || '');
  };

  const handleSubmit = async () => {
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
        console.log('question asked successfully', result);

        const chatresponse = result.choices[0].message.content;
        setQuestion('');
        setResponse(chatresponse);
      } else {
        console.error('Failed to ask question');
      }
    } catch (error) {
      console.error('Error submitting Item:', error);
    } finally {
      //   setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <div className="artboard phone-2 dark:bg-white bg-black   z-auto rounded-md ">
          <div className="chat chat-start p-2 m-2">
            {/* <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS chat bubble component"
                  src="https://portfolioprojectsol.s3.us-east-2.amazonaws.com/Me.JPG"
                  height={50}
                  width={50}
                />
              </div>
            </div> */}
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            {/* <div className="chat-bubble bg-green-300">When is Oscars B Day</div>
            <div className="chat-footer opacity-50">Delivered</div> */}
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
            <div className="chat-bubble">{response}</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className="flex flex-row gap-2 items-center">
            <input
              type="text"
              placeholder="How old is Oscar?"
              value={question}
              onChange={onChange}
              className="input input-bordered input-accent w-[300px] max-w-xs"
            />
            <FaRegArrowAltCircleUp
              className="text-3xl text-green-500 cursor-pointer"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBubble;
