import React from 'react';
import { menuContext } from '../context/menuContext';
import { AppMenu } from '../pages/AppMenu';
import { Login } from '../components/Login';

export const Extras = () => {
  const { menu, login } = React.useContext(menuContext);

  return (
    <>
      {menu && <AppMenu />}
      {login && <Login />}
    </>
  );
};
