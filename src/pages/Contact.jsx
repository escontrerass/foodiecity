import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { PrimaryButton } from '../components/PrimaryButton';
import { Extras } from '../components/Extras';

export const Contact = () => {
  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex flex-col gap-3 mt-10 px-3'>
          <h4 className='font-bebas text-xl mb-2'>Contacto</h4>
          <p className='text-s'>
            Contacte con nuestras oficinas a través de lo siguientes medios
            disponibles.
          </p>
          <div className='flex flex-col gap-10 mt-16 items-center'>
            <div className='flex flex-col items-center gap-3'>
              <p className='flex items-center gap-3'>
                <AiFillPhone size='1.5rem' />
                Contacto telefónico:
              </p>
              <PrimaryButton title='+58 424-1234567' />
            </div>
            <p className='text-sm'>O por medio de nuestro</p>
            <div className='flex flex-col items-center gap-3'>
              <p className='flex items-center gap-3'>
                <AiOutlineMail size='1.5rem' />
                Correo eletronico:
              </p>
              <PrimaryButton title='soporte@foodiecity.com' />
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
};
