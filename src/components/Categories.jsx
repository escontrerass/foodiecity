import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../containers/Section';
import { SecondaryButton } from './SecondaryButton';

export const Categories = (props) => {
  const { categories, link } = props;
  const navigate = useNavigate();
  const handleCategory = (id) => navigate(`/category/${id}`);

  return (
    <Section title='Categorias' buttonTitle='Ver más' linkButton={link}>
      {categories && (
        <div className='grid grid-cols-3 gap-3'>
          {categories.map((category) => (
            <SecondaryButton
              key={category.id}
              title={category.name}
              handle={() => handleCategory(category.id)}
            />
          ))}
        </div>
      )}
    </Section>
  );
};
