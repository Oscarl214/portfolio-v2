import React from 'react'
import ThumbsUp from '@/public/ThumbsUp.gif'
interface StatItemProps {
    value: string
    label: string[]
  }

  import Image from 'next/image'

import StatsData from './stats.json'
const Stats = () => {
    const Stats= StatsData
  return (
      <div className="flex flex-row lg:gap-10 flex-wrap gap-4">
        {Stats.map((stat, index) => (
          <div key={index}>
            <p className="font-outfit font-semibold text-[70px] leading-[84px] tracking-[-0.7px] dark:text-white">
              {stat.value}
            </p>
            {stat.label.map((text, i) => (
              <p key={i} className="font-outfit  text-base tracking-[-0.16px] leading-[19.2px] dark:text-gray-300">
                {text}
              </p>
            ))}
          </div>
        ))}
        <div className='flex flex-col gap-2'><Image src={ThumbsUp} className='h-auto w-auto' alt="Thumbs Up Gif" height={75} width={75}/>
        <p className="font-outfit  text-base tracking-[-0.16px] leading-[19.2px] dark:text-gray-300">
              Happy Clients 
              </p>
              </div>
      </div>
  )
}

export default Stats
