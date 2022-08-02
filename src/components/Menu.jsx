import React from 'react';
import { Logo } from './Logo';
import { CgMenu, CgSearch } from 'react-icons/cg';
import { menuContext } from '../context/menuContext';
import { Link } from 'react-router-dom';

export const Menu = (props) => {
  // const { status } = props;
  const { menu, setMenu } = React.useContext(menuContext);
  const iconSize = '2rem';
  const handleClick = () => setMenu(!menu);
  const handleLogo = () => setMenu(false);
  const handleSearch = () => {};

  return (
    <header className='flex flex-col gap-6 fixed top-0 w-full bg-gradient-to-b from-amber-200 bg-white p-5 z-50'>
      <nav className='flex justify-between items-center'>
        <button onClick={() => handleClick()} className='w-8'>
          <CgMenu size={iconSize} />
        </button>
        <button onClick={() => handleLogo()} className='w-32'>
          <Link to='/'>
            <Logo status={true} />
          </Link>
        </button>
        {!menu ? (
          <Link className='self-center' to='/search'>
            <button
              onClick={() => handleSearch()}
              className='flex items-center w-8'
            >
              <CgSearch size={iconSize} />
            </button>
          </Link>
        ) : (
          <div className='w-8' />
        )}
      </nav>
    </header>
  );
};
