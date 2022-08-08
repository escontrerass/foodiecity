import React from 'react';

export const Modal = ({ children }) => {
  return (
    <div className='flex fixed z-50 top-0 w-full h-screen bg-black/75 overflow-hidden justify-center'>
      <div className='place-content-center mx-5 my-auto bg-white border border-white h-fit rounded-lg p-5 w-full tablet:w-6/12 dt: w-full'>
        {children}
      </div>
    </div>
  );
};
