'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { FaCode, FaChartLine } from 'react-icons/fa';
import { useMode } from '../providers';

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { mode, toggleMode } = useMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function handleModeToggle() {
    const newMode = mode === 'dev' ? 'martech' : 'dev';
    setTheme(newMode === 'dev' ? 'dark' : 'light');
    toggleMode();
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Mode Toggle - Dev vs Martech */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Mode:</span>
        <Switch
          size="sm"
          isSelected={mode === 'martech'}
          color="success"
          onClick={handleModeToggle}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? <FaChartLine className="text-white" /> : <FaCode className="text-white" />
          }
        />
        <span className="text-xs text-gray-500">{mode === 'dev' ? 'Dev' : 'Martech'}</span>
      </div>
      
      {/* Theme Display */}
      {/* <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Theme:</span>
        <span className="text-xs text-gray-500">{mode === 'dev' ? 'Dark' : 'Light'}</span>
      </div> */}
    </div>
  );
};

export default Switcher;
