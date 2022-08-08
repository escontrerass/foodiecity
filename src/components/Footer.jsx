import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Rrss } from './Rrss';

export const Footer = (props) => {
  const { status } = props;

  return (
    <footer className='bottom-0 w-full flex flex-col items-center'>
      {!status && (
        <div className='grid grid-cols-2 justify-items-center w-full h-36 bg-gradient-to-t from-amber-200 dt:h-24'>
          <>
            <div className='flex flex-col items-center justify-center gap-2 dt:flex-row'>
              <div>
                <Logo />
              </div>
              <Rrss />
            </div>
            <div className='flex items-center w-full'>
              <ul className='flex flex-col gap-3 text-s dt:flex-row'>
                <li>
                  <Link to='/about'>Quienes somos</Link>
                </li>
                <li>
                  <Link to='/terms'>Términos y condiciones</Link>
                </li>
                <li>
                  <Link to='/support'>Soporte</Link>
                </li>
                <li>
                  <Link to='/contact'>Contacto</Link>
                </li>
              </ul>
            </div>
          </>
        </div>
      )}
      <div className='flex items-center justify-center h-14 bg-red w-full'>
        <p className='text-white text-s font-light'>
          Copyright © 2022 Foodie City Tours
        </p>
      </div>
    </footer>
  );
};
