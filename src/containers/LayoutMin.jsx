import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

export const LayoutMin = ({ children }) => {
  return (
    <>
      <Menu status={true} />
      {children}
      <Footer status={true} />
    </>
  );
};
