import React from 'react';
import { Logo } from './Logo';
import { CgMenu, CgSearch } from 'react-icons/cg';
import { TiArrowSortedDown } from 'react-icons/ti';

export const Menu = () => {
  const [menuCategory, setMenuCategory] = React.useState(false);
  const iconSize = '2rem';
  const handleClick = () => setMenuCategory(!menuCategory);
  return (
    <header className='flex flex-col gap-6 fixed top-0 w-full bg-gradient-to-b from-amber-200 p-5'>
      <nav className='flex justify-between'>
        <button>
          <CgMenu size={iconSize} />
        </button>
        <button className='w-32'>
          <Logo status={true} />
        </button>
        <button>
          <CgSearch size={iconSize} />
        </button>
      </nav>
      <div className='flex justify-between items-center relative'>
        <p className='text-xl'>Sitios populares</p>
        <button
          type='button'
          onClick={() => handleClick()}
          className='flex items-center w-36 justify-between text-sm border py-1 px-3 rounded-xl border-red'
        >
          Comida rapida <TiArrowSortedDown />
        </button>
        {menuCategory && (
          <div className='absolute right-0 -bottom-menuCategory w-36 p-2 bg-white border-red border rounded-xl'>
            <ul className='list-disc list-inside marker:text-red'>
              <li>Pizza</li>
              <li>Parrilla</li>
              <li>Asiatica</li>
              <li>Postres</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
