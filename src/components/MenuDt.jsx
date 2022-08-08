import React from 'react';
import { Logo } from './Logo';
import { menuContext } from '../context/menuContext';
import { Link } from 'react-router-dom';
import { SecondaryButton } from './SecondaryButton';
import { PrimaryButton } from './PrimaryButton';
import { FaSearch } from 'react-icons/fa';

export const MenuDt = (props) => {
  const [searchText, setSearchText] = React.useState('');
  const { menu, setMenu } = React.useContext(menuContext);
  const handleClick = () => setMenu(!menu);
  const handleLogo = () => setMenu(false);
  const handleSearchText = (text) => setSearchText(text);

  return (
    <header className='flex flex-col gap-3 fixed top-0 w-full bg-gradient-to-b from-amber-200 bg-white z-50'>
      <nav className='flex justify-between items-center pt-5 px-16'>
        <button onClick={() => handleLogo()} className='w-32'>
          <Link to='/'>
            <Logo status={true} />
          </Link>
        </button>
        <div className='flex items-center gap-10 font-bold w-4/6'>
          <p className='whitespace-nowrap'>Inicio</p>
          <p className='whitespace-nowrap'>Sitios nuevos</p>
          <p className='whitespace-nowrap'>Sitios populares</p>
          <SecondaryButton title='Iniciar sesion' />
          <PrimaryButton title='Registrar' />
        </div>
      </nav>
      <div className='flex items-center w-full bg-lightGray h-20'>
        <div className='flex w-5/6 mx-auto items-center'>
          <p className='whitespace-nowrap pr-5 font-bold'>
            ¿Qué estás buscando?
          </p>
          <input
            className='w-full border border-blue-gray-300 text-sm rounded-tl-lg rounded-bl-lg px-2 py-3'
            type='text'
            placeholder='Buscador'
            onChange={(e) => handleSearchText(e.target.value)}
          />
          <button className='border-2 border-blue-gray-300 bg-red px-8 py-3.5 rounded-tr-lg rounded-br-lg'>
            <FaSearch color='white' />
          </button>
        </div>
      </div>
    </header>
  );
};
