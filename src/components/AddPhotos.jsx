import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { SectionModal } from '../containers/SectionModal';
import { SecondaryButton } from './SecondaryButton';

export const AddPhotos = (props) => {
  const { setModal } = props;
  const handleStatus = () => {
    setModal(false);
  };

  return (
    <SectionModal title='Agregar foto' setSection={setModal}>
      <div className='w-1/2 mt-10'>
        <SecondaryButton title='Subir imagen' />
      </div>
      <div className='w-1/2 mb-5'>
        <PrimaryButton title='Agregar' handle={handleStatus} />
      </div>
    </SectionModal>
  );
};
