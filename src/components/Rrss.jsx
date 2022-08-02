import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

export const Rrss = () => {
  const iconsStyle = 'bg-black rounded-full p-1 cursor-pointer';

  return (
    <div>
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
  );
};
