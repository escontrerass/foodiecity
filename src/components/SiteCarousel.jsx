import React from 'react';
import { Link } from 'react-router-dom';
import { menuContext } from '../context/menuContext';

export const SiteCarousel = (props) => {
  const { setSelected } = React.useContext(menuContext);
  const { id, name, category, imagen, description, more } = props;
  const handleClick = () => setSelected(props);
  return (
    <Link to={`/${category}/${id}`} onClick={() => handleClick()}>
      <div className='relative rounded-xl overflow-hidden'>
        <img src={imagen[0]} alt={name} />
        <h4 className='absolute top-2 left-3 bg-yellow/70 px-2 py-1 rounded-2xl text-white font-bold'>
          {category}
        </h4>
        {!more ? (
          <div className='absolute bottom-2 left-3 bg-black/70 px-2 py-1 rounded-2xl text-white'>
            <h4 className='font-bold text-sm'>{name}</h4>
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
