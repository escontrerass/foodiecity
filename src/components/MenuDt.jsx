import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { menuContext } from '../context/menuContext';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from './SecondaryButton';
import { PrimaryButton } from './PrimaryButton';
import { FaSearch } from 'react-icons/fa';

export const MenuDt = () => {
  const { setLogin, setSignIn, setBusiness, setStatus, status } =
    React.useContext(menuContext);
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
  const handleBusiness = () => {
    setBusiness(true);
  };
  const handleLogout = () => setStatus(!status);

  return (
    <header className='flex flex-col gap-3 fixed top-0 w-full bg-gradient-to-b from-amber-200 bg-white z-50'>
      <nav className='flex justify-between items-center pt-5 px-8'>
        <button className='w-32'>
          <Link to='/'>
            <Logo status={true} />
          </Link>
        </button>
        <div className='flex items-center gap-2 font-bold w-9/12 justify-end'>
          <Link to='/' className='hover:text-red'>
            <p className='whitespace-nowrap'>Inicio</p>
          </Link>
          <Link to='/category' className='hover:text-red'>
            <p className='whitespace-nowrap'>Categorias</p>
          </Link>
          <Link to='/news' className='hover:text-red'>
            <p className='whitespace-nowrap'>Sitios nuevos</p>
          </Link>
          <Link to='/popular' className='hover:text-red'>
            <p className='whitespace-nowrap'>Sitios populares</p>
          </Link>
          {!status && (
            <div className='w-40'>
              <SecondaryButton
                title='Iniciar sesion'
                font={true}
                handle={handleLogin}
              />
            </div>
          )}
          {!status && (
            <div className='w-40'>
              <PrimaryButton
                title='Registrar'
                font={true}
                handle={handleSignIn}
              />
            </div>
          )}
          {status && (
            <div className='flex gap-2 items-center'>
              <SecondaryButton
                title='Agregar negocio'
                font={true}
                handle={handleBusiness}
              />
              <div className='flex items-center gap-3'>example@email.com</div>
              <button
                onClick={() => handleLogout()}
                className='my-auto text-base text-red hover:text-black'
                type='button'
              >
                Logout
              </button>
            </div>
          )}
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
