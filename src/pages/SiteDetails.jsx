import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { Selected } from '../components/Selected';
import { Extras } from '../components/Extras';

export const SiteDetails = () => {
  const { selected } = React.useContext(menuContext);

  return (
    <Layout>
      <Extras />
      <Main>
        <Selected {...selected} />
      </Main>
    </Layout>
  );
};
