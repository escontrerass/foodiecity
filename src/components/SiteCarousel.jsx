import React from 'react';
import { Link } from 'react-router-dom';
import { menuContext } from '../context/menuContext';
import { categoryList } from '../data';

export const SiteCarousel = (props) => {
  const { setSelected } = React.useContext(menuContext);
  const { id, name, category, imagen, description, more } = props;
  const categoryName = categoryList.filter((cat) => cat.id === category);
  const handleClick = () => setSelected(props);

  return (
    <Link
      className='w-full'
      to={`/${category}/${id}`}
      onClick={() => handleClick()}
    >
      <div className='relative rounded-xl overflow-hidden h-64 w-full'>
        <img className='min-h-full w-full' src={imagen[0]} alt={name} />
        <h4 className='absolute top-2 left-3 bg-yellow/70 px-2 py-1 rounded-2xl text-white text-sm'>
          {categoryName[0].name}
        </h4>
        {!more ? (
          <div className='absolute bottom-2 left-3 bg-black/70 px-2 py-1 rounded-2xl text-white'>
            <h4 className='text-sm'>{name}</h4>
          </div>
        ) : (
          <div className='absolute bottom-2 left-3 right-3 bg-black/70 px-2 py-1 rounded-2xl text-white'>
            <h4 className='font-bold text-sm'>{name}</h4>
            <p className='text-s font-light'>{description}</p>
          </div>
        )}
      </div>
    </Link>
  );
};
