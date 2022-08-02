import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { menuContext } from '../context/menuContext';
import { Selected } from '../components/Selected';
import { Extras } from '../components/Extras';
import { MaxImg } from '../components/MaxImg';

export const SiteDetails = () => {
  const { selected } = React.useContext(menuContext);
  const [modal, setModal] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('');

  return (
    <Layout>
      <Extras />
      {modal && (
        <MaxImg setModal={setModal} modalImg={modalImg} name={selected.name} />
      )}
      <Main>
        <Selected {...selected} setModal={setModal} setModalImg={setModalImg} />
      </Main>
    </Layout>
  );
};
