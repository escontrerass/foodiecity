import React from 'react';
import { Modal } from '../containers/Modal';
import { CgClose } from 'react-icons/cg';
import { menuContext } from '../context/menuContext';

export const Login = () => {
  const { setLogin, setStatus } = React.useContext(menuContext);
  const inputStyles = 'border border-red p-2 rounded-lg';
  const handleLogin = () => setLogin(false);
  const handleStatus = () => {
    setLogin(false);
    setStatus(true);
  };

  return (
    <Modal>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between w-full'>
          <p className='font-bebas text-lg'>Iniciar sesion</p>
          <button type='button' onClick={() => handleLogin()}>
            <CgClose size={'1.3rem'} />
          </button>
        </div>
        <form className='flex flex-col gap-4 justify-center' action='#'>
          <input
            className='border border-red p-2 rounded-lg'
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
          <input
            className='mt-2 bg-red rounded-lg w-1/2 self-center text-white text-sm px-4 py-1'
            type='button'
            value='Iniciar sesion'
            onClick={() => handleStatus()}
          />
        </form>
      </div>
    </Modal>
  );
};
