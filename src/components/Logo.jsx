import React from 'react';
import logo from '../assets/Logo.svg';
import logo2 from '../assets/Logo-2.svg';

export const Logo = (props) => {
  const { status } = props;

  return <img src={status ? logo : logo2} alt='Logo foodie city' />;
};
