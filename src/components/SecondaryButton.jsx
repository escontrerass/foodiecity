import React from 'react';

export const SecondaryButton = (props) => {
  const { title, handle, font } = props;
  const style = !font
    ? 'border border-red bg-white px-5 py-1.5 text-red text-s rounded-xl w-full'
    : 'border border-red bg-white px-5 py-1.5 text-red rounded-xl w-full font-bebas tracking-widest whitespace-nowrap';

  return (
    <button type='button' className={style} onClick={() => handle && handle()}>
      {title}
    </button>
  );
};
