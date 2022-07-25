import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { AppMenu } from './AppMenu';
import { Login } from '../components/Login';
export const Home = ({ children }) => {
  const { menu, login } = React.useContext(menuContext);

  return (
    <Layout>
      {menu && <AppMenu />}
      {login && <Login />}
      <Main>{children}</Main>
    </Layout>
  );
};
