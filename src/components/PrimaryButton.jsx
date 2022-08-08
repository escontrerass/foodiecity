import React from 'react';

export const PrimaryButton = (props) => {
  const { title, handle, font } = props;
  const style = !font
    ? 'border border-white bg-red px-5 py-1.5 text-white text-s rounded-xl w-full'
    : 'border border-white bg-red px-5 py-1.5 text-white rounded-xl w-full font-bebas tracking-widest whitespace-nowrap';

  return (
    <button type='button' className={style} onClick={() => handle && handle()}>
      {title}
    </button>
  );
};
