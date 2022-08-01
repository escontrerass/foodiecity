import React from 'react';
import { Logo } from './Logo';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Footer = (props) => {
  const { status } = props;
  const iconsStyle = 'bg-black rounded-full p-1 cursor-pointer';

  return (
    <footer className='bottom-0 w-full flex flex-col items-center'>
      {!status && (
        <div className='grid grid-cols-2 justify-items-center w-full h-36 bg-gradient-to-t from-amber-200'>
          <>
            <div className='flex flex-col items-center justify-center gap-2'>
              <div>
                <Logo />
              </div>
              <ul className='flex gap-3'>
                <li className={iconsStyle}>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsFacebook color='white' />
                  </a>
                </li>
                <li className={iconsStyle}>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsInstagram color='white' />
                  </a>
                </li>
                <li className={iconsStyle}>
                  <a
                    href='https://twitter.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <BsTwitter color='white' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex items-center w-full'>
              <ul className='flex flex-col gap-3 text-s'>
                <li>
                  <Link to='/about'>Quienes somos</Link>
                </li>
                <li>
                  <Link to='/terms'>Terminos y condiciones</Link>
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
