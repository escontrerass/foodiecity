import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

export const LayoutMin = (props) => {
  const { children, menu, footer } = props;

  return (
    <>
      <Menu status={menu} />
      {children}
      <Footer status={footer} />
    </>
  );
};
