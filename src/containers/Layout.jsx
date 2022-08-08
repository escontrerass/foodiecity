import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { MenuDt } from '../components/MenuDt';

export const Layout = ({ children }) => {
  const windowWidth = window.innerWidth;
  return (
    <div className='flex flex-col justify-between min-h-screen font-mont w-full'>
      {windowWidth < 1000 ? <Menu /> : <MenuDt />}
      {children}
      <Footer />
    </div>
  );
};
