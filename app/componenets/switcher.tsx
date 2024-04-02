'use client';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

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
      <Button size="sm" variant="flat" onClick={() => handleTheme()}>
        DarkMode
      </Button>
    </div>
  );
};

export default Switcher;
