import React from 'react';

export const PrimaryButton = (props) => {
  const { title } = props;
  return (
    <button
      type='button'
      className='bg-red px-5 py-2 text-white text-s rounded-xl'
    >
      {title}
    </button>
  );
};
