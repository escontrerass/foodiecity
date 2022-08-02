import React from 'react';
import { menuContext } from '../context/menuContext';
import { AppMenu } from '../pages/AppMenu';
import { Login } from '../components/Login';
import { SignIn } from './SignIn';
import { Business } from './Business';

export const Extras = () => {
  const { menu, login, signIn, business } = React.useContext(menuContext);

  return (
    <>
      {menu && <AppMenu />}
      {login && <Login />}
      {signIn && <SignIn />}
      {business && <Business />}
    </>
  );
};
