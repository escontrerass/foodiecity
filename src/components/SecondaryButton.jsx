import React from 'react';

export const SecondaryButton = (props) => {
  const { title, handle } = props;

  return (
    <button
      type='button'
      className=' border border-red bg-white px-5 py-1.5 text-red text-s rounded-xl w-full'
      onClick={() => handle && handle()}
    >
      {title}
    </button>
  );
};
