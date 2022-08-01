import React from 'react';

export const ItemMenu = (props) => {
  const { title, icon, handle } = props;
  return (
    <button
      className='flex items-center gap-3 text-sm border-b border-slate-400 pb-2 w-full'
      onClick={() => handle()}
      type='button'
    >
      {icon} {title}
    </button>
  );
};
