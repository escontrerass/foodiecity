import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

export const Main = ({ children }) => {
  const [menuCategory, setMenuCategory] = React.useState(false);
  const handleClick = () => setMenuCategory(!menuCategory);
  return (
    <div className='flex justify-between items-center relative mt-24 px-5 w-full'>
      <p className='text-2xl font-bebas'>Sitios populares</p>
      <button
        type='button'
        onClick={() => handleClick()}
        className='flex items-center w-36 justify-between text-sm border py-1 px-3 rounded-xl border-red'
      >
        Comida rapida <TiArrowSortedDown />
      </button>
      {menuCategory && (
        <div className='absolute right-5 -bottom-menuCategory w-36 p-2 bg-white border-red border rounded-xl'>
          <ul className='list-disc list-inside marker:text-red'>
            <li>Pizza</li>
            <li>Parrilla</li>
            <li>Asiatica</li>
            <li>Postres</li>
          </ul>
        </div>
      )}
      {children}
    </div>
  );
};
