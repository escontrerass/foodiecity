import React from 'react';
import { menuContext } from '../context/menuContext';
import { PrimaryButton } from './PrimaryButton';
import { SectionModal } from '../containers/SectionModal';

export const Login = () => {
  const { setLogin, setStatus } = React.useContext(menuContext);
  const inputStyles =
    'border border-blue-gray-300 p-2 rounded-sm text-s w-full items-center';
  const handleStatus = () => {
    setLogin(false);
    setStatus(true);
  };

  return (
    <SectionModal title='Iniciar sesion' setSection={setLogin}>
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
        placeholder='******'
      />
      <div className='w-1/2 my-5'>
        <PrimaryButton title='Iniciar sesión' handle={handleStatus} />
      </div>
    </SectionModal>
  );
};
