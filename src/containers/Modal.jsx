import React from 'react';

export const Modal = ({ children }) => {
  return (
    <div className='flex absolute z-50 top-0 w-full h-screen bg-black/75'>
      <div className='place-content-center mx-5 my-auto bg-white border border-white h-fit rounded-xl p-5 w-full'>
        {children}
      </div>
    </div>
  );
};
