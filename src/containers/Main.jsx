import React from 'react';

export const Main = ({ children }) => {
  return (
    <div className='flex flex-col w-full gap-5 px-5 mt-24 dt:mt-44 dt:px-36'>
      {children}
    </div>
  );
};
