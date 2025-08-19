import React from 'react'
import ThumbsUp from '@/public/ThumbsUp.gif'
import Meme from '@/public/martechmeme.jpg'
interface StatItemProps {
    value: string
    label: string[]
  }

  import Image from 'next/image'

interface StatsProps {
  mode: 'dev' | 'martech';
}

const Stats = ({ mode }: StatsProps) => {
    const devStats = [
        {
            value: "+3",
            label: ["YEARS OF", "DEVELOPMENT"]
        },
        {
            value: "+15",
            label: ["PROJECTS", "COMPLETED"]
        }
    ];

    const martechStats = [
        {
            value: "+200",
            label: ["CAMPAIGNS", "EXECUTED"]
        },
        {
            value: "500k",
            label: ["AUDIENCE SIZE LISTS", "MANAGED"]
        }, 
        {
          value: "5+",
          label: ["GLOBAL REGIONS", "SUPPORTED"]
      }
    ];

    const Stats = mode === 'dev' ? devStats : martechStats;
  return (
      <div className="flex flex-row lg:gap-10 flex-wrap gap-4">
        {Stats.map((stat, index) => (
          <div key={index}>
            <p className="font-outfit font-semibold text-[70px] leading-[84px] tracking-[-0.7px] dark:text-white text-[#FF746C]">
              {stat.value}
            </p>
            {stat.label.map((text, i) => (
              <p key={i} className="font-semibold  text-base tracking-[-0.16px] leading-[19.2px] dark:text-white">
                {text}
              </p>
            ))}
          </div>
        ))}
        <div className={`${mode=='dev' ? 'flex flex-col gap-2' : 'hidden'}`}><Image src={ThumbsUp} className={` ${mode==='dev'? 'h-auto w-auto': 'hidden'}`} alt="Meme" height={75} width={75}/>
        <p className="font-outfit  text-base tracking-[-0.16px] leading-[19.2px] dark:text-gray-300">
              Happy Clients 
              </p>
              </div>
      </div>
  )
}

export default Stats
