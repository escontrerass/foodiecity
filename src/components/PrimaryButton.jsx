import React from 'react';

export const PrimaryButton = (props) => {
  const { title } = props;

  return (
    <button
      type='button'
      className=' border border-white bg-red px-5 py-1.5 text-white text-s rounded-xl w-full'
    >
      {title}
    </button>
  );
};
