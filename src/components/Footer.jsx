import React from 'react';
import { Logo } from './Logo';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

export const Footer = ({ status }) => {
  const iconsStyle = 'bg-black rounded-full p-1 cursor-pointer';
  return (
    <footer className='bottom-0 w-full flex flex-col items-center'>
      <div className='grid grid-cols-2 justify-items-center w-full h-36 bg-gradient-to-t from-amber-200'>
        {!status && (
          <>
            <div className='flex flex-col items-center justify-center gap-2'>
              <div>
                <Logo />
              </div>
              <ul className='flex gap-3'>
                <li className={iconsStyle}>
                  <BsFacebook color='white' />
                </li>
                <li className={iconsStyle}>
                  <BsInstagram color='white' />
                </li>
                <li className={iconsStyle}>
                  <BsTwitter color='white' />
                </li>
              </ul>
            </div>
            <div className='flex items-center w-full'>
              <ul className='flex flex-col gap-3 text-s'>
                <li>Quienes somos</li>
                <li>Terminos y condiciones</li>
                <li>Soporte</li>
                <li>Contacto</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className='flex items-center justify-center h-14 bg-red w-full'>
        <p className='text-white text-s font-light'>
          Copyright © 2022 Foodie City Tours
        </p>
      </div>
    </footer>
  );
};
