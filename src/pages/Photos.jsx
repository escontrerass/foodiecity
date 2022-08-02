import React from 'react';
import { menuContext } from '../context/menuContext';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { Extras } from '../components/Extras';
import { Section } from '../containers/Section';
import { SecondaryButton } from '../components/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { AddPhotos } from '../components/AddPhotos';

export const Photos = () => {
  const { selected } = React.useContext(menuContext);
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleModal = () => setModal(true);

  return (
    <Layout>
      <Extras />
      {modal && <AddPhotos setModal={setModal} />}
      <Main>
        <div className='flex justify-between items-center'>
          <h2 className='font-bebas text-2xl'>{selected.name}</h2>
          <div className='w-2/6'>
            <SecondaryButton title='Volver' handle={handleBack} />
          </div>
        </div>
        <Section title='Fotos' buttonTitle='Agregar nueva' handle={handleModal}>
          <div className='flex flex-col gap-5'>
            {selected.imagen.map((img, index) => (
              <img
                className='rounded-lg border border-blue-gray-300'
                key={index}
                src={img}
                alt={selected.name}
              />
            ))}
          </div>
        </Section>
      </Main>
    </Layout>
  );
};
