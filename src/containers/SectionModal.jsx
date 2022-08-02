import React from 'react';
import { Modal } from '../containers/Modal';
import { CgClose } from 'react-icons/cg';

export const SectionModal = (props) => {
  const { children, title, setSection } = props;
  const handleModal = () => setSection(false);
  return (
    <Modal>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between w-full mt-3'>
          <p className='font-bebas text-lg'>{title}</p>
          <button type='button' onClick={() => handleModal()}>
            <CgClose size={'1.3rem'} />
          </button>
        </div>
        <form
          className='flex flex-col gap-5 justify-center items-center w-full'
          action='#'
        >
          {children}
        </form>
      </div>
    </Modal>
  );
};
