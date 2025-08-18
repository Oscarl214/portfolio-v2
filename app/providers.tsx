'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext, useState, ReactNode } from 'react';

// Mode context for dev/martech toggle
interface ModeContextType {
  mode: 'dev' | 'martech';
  setMode: (mode: 'dev' | 'martech') => void;
  toggleMode: () => void;
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
  const [mode, setMode] = useState<'dev' | 'martech'>('dev');

  const toggleMode = () => {
    setMode(prev => prev === 'dev' ? 'martech' : 'dev');
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        themes={['light', 'dark', 'mytheme']}
      >
        <ModeProvider>
          {children}
        </ModeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}


