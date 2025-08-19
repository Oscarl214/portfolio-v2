'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { FaCode, FaChartLine } from 'react-icons/fa';
import { useMode } from '../providers';
import Image from 'next/image';

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { mode, toggleMode, isLoaded } = useMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Synchronize theme with mode when component mounts or mode changes
  useEffect(() => {
    if (mounted && isLoaded) {
      const expectedTheme = mode === 'dev' ? 'dark' : 'martech';
      if (theme !== expectedTheme) {
        setTheme(expectedTheme);
      }
    }
  }, [mode, theme, setTheme, mounted, isLoaded]);

  if (!mounted || !isLoaded) return null;

  function handleModeToggle() {
    const newMode = mode === 'dev' ? 'martech' : 'dev';
    const newTheme = newMode === 'dev' ? 'dark' : 'martech';
    setTheme(newTheme);
    toggleMode();
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Mode Toggle - Dev vs Martech */}
      <div className="flex items-center gap-2">
      <span className={`text-xs font-bold ${mode === 'dev' ? 'text-red-500' : 'text-martech-600'}`}>{mode === 'dev' ? 'DEV' : 'MARTTECH'}</span>
        <Switch
          size="sm"
          isSelected={mode === 'martech'}
          color="primary"
          onClick={handleModeToggle}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <Image 
                src="/martech/martech.svg" 
                alt="Martech" 
                width={24} 
                height={24} 
                className="text-white"
              />
            ) : (
              <Image 
                src="/tech/dev.svg" 
                alt="Dev" 
                width={24} 
                height={24} 
                className="text-white"
              />
            )
          }
        />
        
      </div>
      
  

    </div>
  );
};

export default Switcher;
