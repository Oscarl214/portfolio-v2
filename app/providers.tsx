'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Mode context for dev/martech toggle
interface ModeContextType {
  mode: 'dev' | 'martech';
  setMode: (mode: 'dev' | 'martech') => void;
  toggleMode: () => void;
  isLoaded: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'dev' | 'martech'>('martech');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('portfolio-mode');
    if (savedMode === 'dev' || savedMode === 'martech') {
      setMode(savedMode);
    }
    setIsLoaded(true);
  }, []);

  // Save mode to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolio-mode', mode);
    }
  }, [mode, isLoaded]);

  const toggleMode = () => {
    setMode(prev => prev === 'dev' ? 'martech' : 'dev');
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, isLoaded }}>
      {children}
    </ModeContext.Provider>
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="martech"
        themes={['light', 'dark', 'martech']}
        enableSystem={false}
        disableTransitionOnChange
        storageKey="portfolio-theme"
      >
        <ModeProvider>
          {children}
        </ModeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}


