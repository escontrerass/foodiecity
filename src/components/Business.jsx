import React from 'react';
import { menuContext } from '../context/menuContext';
import { PrimaryButton } from './PrimaryButton';
import { SectionModal } from '../containers/SectionModal';

export const Business = () => {
  const { setBusiness, setStatus } = React.useContext(menuContext);
  const inputStyles =
    'border border-blue-gray-300 p-2 rounded-sm text-s w-full items-center';
  const handleStatus = () => {
    setBusiness(false);
    setStatus(true);
  };

  return (
    <SectionModal
      title='Agregar negocio'
      setSection={setBusiness}
      handle={handleStatus}
    >
      <input
        className={inputStyles}
        type='text'
        name='name'
        id='name'
        placeholder='Nombre'
      />
      <input
        className={inputStyles}
        type='text'
        name='category'
        id='category'
        placeholder='Categoría'
      />
      <input
        className={inputStyles}
        type='text'
        name='address'
        id='address'
        placeholder='Dirección'
      />
      <input
        className={inputStyles}
        type='number'
        name='phone'
        id='phone'
        placeholder='Número telefónico'
      />
      <input
        className={inputStyles}
        type='url'
        name='map'
        id='map'
        placeholder='Link de Google Maps'
      />
      <input
        className={inputStyles}
        type='url'
        name='web'
        id='web'
        placeholder='Sitio web'
      />
      <input
        className={inputStyles}
        type='url'
        name='fb'
        id='fb'
        placeholder='Facebook'
      />
      <input
        className={inputStyles}
        type='url'
        name='ig'
        id='ig'
        placeholder='Instagram'
      />
      <input
        className={inputStyles}
        type='url'
        name='tw'
        id='tw'
        placeholder='Twitter'
      />
      <div className='w-1/2 my-5'>
        <PrimaryButton title='Registrar' handle={handleStatus} />
      </div>
    </SectionModal>
  );
};
