'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
  return (
    <div>
      <Switch
        size="sm"
        defaultSelected
        color="success"
        onClick={() => handleTheme()}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? <FaSun className="text-black" /> : <FaMoon />
        }
      ></Switch>
    </div>
  );
};

export default Switcher;
