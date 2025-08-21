import React, { useState, useEffect, useRef } from 'react'
import ThumbsUp from '@/public/ThumbsUp.gif'
import Meme from '@/public/martechmeme.jpg'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
    value: string
    label: string[]
  }

  import Image from 'next/image'

interface StatsProps {
  mode: 'dev' | 'martech';
}

// Custom hook for counter animation
const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isAnimating && !hasAnimated) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - start) + start);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setIsAnimating(false);
          setHasAnimated(true); 
        }
      };

      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, start, duration, isAnimating, hasAnimated]);

  const startAnimation = () => {
    if (!hasAnimated) { // Only start if it hasn't animated before
      setIsAnimating(true);
    }
  };

  return { count, startAnimation, isAnimating };
};

// Individual stat component
const StatItem = ({ stat, index, isInView, mode }: { 
  stat: any; 
  index: number; 
  isInView: boolean; 
  mode: 'dev' | 'martech';
}) => {
  const { count, startAnimation } = useCounter(stat.value, 0, 2000);
  
  // Start animation when component comes into view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        startAnimation();
      }, index * 200); // Stagger the start of each counter
      return () => clearTimeout(timer);
    }
  }, [isInView, startAnimation, index]);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
      className="flex flex-col"
    >
      <p className={`font-outfit font-semibold text-[70px] leading-[84px] tracking-[-0.7px] dark:text-white ${mode === 'dev' ? 'text-[#FF746C]' : 'text-martech-600'}`}>
        {stat.prefix}{count}{stat.suffix || ''}
      </p>
      {stat.label.map((text: string, i: number) => (
        <p key={i} className="font-semibold text-base tracking-[-0.16px] leading-[19.2px] dark:text-white">
          {text}
        </p>
      ))}
    </motion.div>
  );
};

const Stats = ({ mode }: StatsProps) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const devStats = [
        {
            value: 3,
            label: ["YEARS OF", "DEVELOPMENT"],
            prefix: "+"
        },
        {
            value: 15,
            label: ["PROJECTS", "COMPLETED"],
            prefix: "+"
        }
    ];

    const martechStats = [
        {
            value: 200,
            label: ["CAMPAIGNS", "EXECUTED"],
            prefix: "+"
        },
        {
            value: 500,
            label: ["AUDIENCE SIZE LISTS", "MANAGED"],
            prefix: "",
            suffix: "k"
        }, 
        {
          value: 5,
          label: ["GLOBAL REGIONS", "SUPPORTED"],
          prefix: "",
          suffix: "+"
      }
    ];

    const Stats = mode === 'dev' ? devStats : martechStats;

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.2
        }
      }
    };

  return (
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-row lg:gap-10 flex-wrap gap-4"
      >
        {Stats.map((stat, index) => (
          <StatItem 
            key={`${mode}-${index}`}
            stat={stat} 
            index={index} 
            isInView={isInView} 
            mode={mode}
          />
        ))}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }
          }}
          className={`${mode=='dev' ? 'flex flex-col gap-2' : 'hidden'}`}
        >
          <Image src={ThumbsUp} className={` ${mode==='dev'? 'h-auto w-auto': 'hidden'}`} alt="Meme" height={75} width={75}/>
          <p className="font-outfit text-base tracking-[-0.16px] leading-[19.2px] dark:text-gray-300">
            Happy Clients 
          </p>
        </motion.div>
      </motion.div>
  )
}

export default Stats
