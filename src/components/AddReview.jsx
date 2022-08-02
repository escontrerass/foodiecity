import React from 'react';
import ReactStars from 'react-stars';
import { PrimaryButton } from './PrimaryButton';
import { SectionModal } from '../containers/SectionModal';
import { SecondaryButton } from './SecondaryButton';

export const AddReview = (props) => {
  const { setModal } = props;
  const handleStatus = () => {
    setModal(false);
  };

  return (
    <SectionModal title='Agregar reseña' setSection={setModal}>
      <ReactStars count={5} size={24} color2={'#ffd700'} />
      <textarea
        className='text-sm w-full p-2'
        id='review'
        name='review'
        cols={4}
        rows={5}
        placeholder='Comentario'
      />
      <div className='w-1/2'>
        <SecondaryButton title='Subir imagen' />
      </div>
      <div className='w-1/2 mb-5'>
        <PrimaryButton title='Agregar' handle={handleStatus} />
      </div>
    </SectionModal>
  );
};
