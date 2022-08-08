import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { menuContext } from '../context/menuContext';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from './SecondaryButton';
import { PrimaryButton } from './PrimaryButton';
import { FaSearch } from 'react-icons/fa';

export const MenuDt = () => {
  const { setLogin, setSignIn } = React.useContext(menuContext);
  const [searchText, setSearchText] = React.useState('');
  const navigate = useNavigate();
  const handleSearchText = (text) => setSearchText(text);
  const handleSearch = () => navigate(`/results/0/${searchText}`);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignIn = () => {
    setSignIn(true);
  };

  return (
    <header className='flex flex-col gap-3 fixed top-0 w-full bg-gradient-to-b from-amber-200 bg-white z-50'>
      <nav className='flex justify-between items-center pt-5 px-16'>
        <button className='w-32'>
          <Link to='/'>
            <Logo status={true} />
          </Link>
        </button>
        <div className='flex items-center gap-4 font-bold w-9/12'>
          <Link to='/'>
            <p className='whitespace-nowrap'>Inicio</p>
          </Link>
          <Link to='/category'>
            <p className='whitespace-nowrap'>Categorias</p>
          </Link>
          <Link to='/news'>
            <p className='whitespace-nowrap'>Sitios nuevos</p>
          </Link>
          <Link to='/popular'>
            <p className='whitespace-nowrap'>Sitios populares</p>
          </Link>
          <SecondaryButton
            title='Iniciar sesion'
            font={true}
            handle={handleLogin}
          />
          <PrimaryButton title='Registrar' font={true} handle={handleSignIn} />
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
          <button
            onClick={() => handleSearch()}
            className='border-2 border-blue-gray-300 bg-red px-8 py-3.5 rounded-tr-lg rounded-br-lg'
          >
            <FaSearch color='white' />
          </button>
        </div>
      </div>
    </header>
  );
};
