import React from 'react';

export const Main = ({ children }) => {
  return (
    <div className='flex flex-col mt-24 px-5 w-full gap-5'>{children}</div>
  );
};
