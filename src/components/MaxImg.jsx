import React from 'react';
import { SectionModal } from '../containers/SectionModal';

export const MaxImg = (props) => {
  const { setModal, modalImg, name } = props;

  return (
    <SectionModal title={name} setSection={setModal}>
      <img className='rounded-lg w-full' src={modalImg} alt={name} />
    </SectionModal>
  );
};
