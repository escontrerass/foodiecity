import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen font-mont w-full'>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
