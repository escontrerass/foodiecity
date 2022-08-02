import React from 'react';
import { Section } from '../containers/Section';

export const Categories = (props) => {
  const { categories, link } = props;

  return (
    <Section title='Categorias' buttonTitle='Ver mas' linkButton={link}>
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
    </Section>
  );
};
