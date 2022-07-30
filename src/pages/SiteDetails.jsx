import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { AppMenu } from './AppMenu';
import { Login } from '../components/Login';
import { Selected } from '../components/Selected';

export const SiteDetails = () => {
  const { menu, login, selected } = React.useContext(menuContext);
  return (
    <Layout>
      {menu && <AppMenu />}
      {login && <Login />}
      <Main>
        <Selected {...selected} />
      </Main>
    </Layout>
  );
};
