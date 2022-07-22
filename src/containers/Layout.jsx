import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
