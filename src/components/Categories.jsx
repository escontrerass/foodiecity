import React from 'react';

export const Categories = ({ categories }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-3'>
        <h3 className='font-bebas text-xl'>Categorias</h3>
        <button className='bg-red text-white px-4 py-1 rounded-2xl text-s font-mont'>
          Ver mas
        </button>
      </div>
      {categories && (
        <div className='flex flex-wrap gap-3 justify-between'>
          {categories.map((category) => (
            <button
              className='text-red border border-red px-2 py-1 text-s font-bold rounded-2xl'
              key={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
