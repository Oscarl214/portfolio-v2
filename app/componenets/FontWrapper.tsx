'use client';

import { useMode } from '../providers';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface FontWrapperProps {
  children: React.ReactNode;
}

const FontWrapper = ({ children }: FontWrapperProps) => {
  const { mode } = useMode();

  return (
    <div className={mode === 'martech' ? roboto.className : ''}>
      {children}
    </div>
  );
};

export default FontWrapper;
