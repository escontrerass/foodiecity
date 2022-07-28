import React from 'react';

export const SiteCarousel = (props) => {
  const { name, category, imagen } = props;
  return (
    <div className='relative rounded-xl overflow-hidden'>
      <img src={imagen[0]} alt={name} />
      <h4 className='absolute top-2 left-3 bg-yellow/70 px-2 py-1 rounded-2xl text-white font-bold'>
        {category}
      </h4>
      <h4 className='absolute bottom-2 left-3 bg-black/70 px-2 py-1 rounded-2xl text-white font-bold'>
        {name}
      </h4>
    </div>
  );
};
