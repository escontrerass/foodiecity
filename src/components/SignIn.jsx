import React from 'react';
import { menuContext } from '../context/menuContext';
import { PrimaryButton } from './PrimaryButton';
import { SectionModal } from '../containers/SectionModal';

export const SignIn = () => {
  const { setSignIn, setStatus } = React.useContext(menuContext);
  const inputStyles =
    'border border-blue-gray-300 p-2 rounded-sm text-s w-full items-center';
  const handleStatus = () => {
    setSignIn(false);
    setStatus(true);
  };

  return (
    <SectionModal title='Registro' setSection={setSignIn}>
      <input
        className={inputStyles}
        type='text'
        name='name'
        id='name'
        placeholder='Nombre'
      />
      <input
        className={inputStyles}
        type='email'
        name='email'
        id='email'
        placeholder='email@example.com'
      />
      <input
        className={inputStyles}
        type='password'
        name='password'
        id='password'
        placeholder='Contraseña'
      />
      <input
        className={inputStyles}
        type='password'
        name='repassword'
        id='repassword'
        placeholder='Confirmar contraseña'
      />
      <div className='w-1/2 my-5'>
        <PrimaryButton title='Registrar' handle={handleStatus} />
      </div>
    </SectionModal>
  );
};
