import React from 'react';
import { LayoutMin } from '../containers/LayoutMin';
import { AiFillSound, AiFillHome } from 'react-icons/ai';
import { FaDumpsterFire, FaUser } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { CgPhone } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { menuContext } from '../context/menuContext';

export const AppMenu = () => {
  const { menu, setMenu, status, setStatus, setLogin } =
    React.useContext(menuContext);
  const sizeIcon = '1.5rem';
  const styleButton =
    'flex items-center gap-3 text-sm border-b border-slate-400 pb-2 w-full';
  const handleClick = () => setMenu(!menu);
  const handleLogin = () => {
    setMenu(!menu);
    setLogin(true);
  };
  const handleStatus = () => setStatus(!status);
  return (
    <div className='absolute top-0 pt-28 bg-white w-full h-screen z-10'>
      <LayoutMin>
        <div className='relative flex flex-col justify-between px-10 h-full z-30'>
          <div className='flex flex-col gap-5'>
            <Link to={'/'}>
              <button
                type='button'
                onClick={() => handleClick()}
                className={styleButton}
              >
                <AiFillHome size={sizeIcon} /> Inicio
              </button>
            </Link>
            <button type='button' className={styleButton}>
              <AiFillSound size={sizeIcon} /> Sitios nuevos
            </button>
            <button type='button' className={styleButton}>
              <FaDumpsterFire size={sizeIcon} /> Sitios populares
            </button>
            <button type='button' className={styleButton}>
              <BsPeopleFill size={sizeIcon} /> Quienes somos
            </button>
            <button type='button' className={styleButton}>
              <RiCustomerService2Fill size={sizeIcon} /> Soporte
            </button>
            <button type='button' className={styleButton}>
              <CgPhone size={sizeIcon} /> Contacto
            </button>
          </div>
          <div className='mb-20 w-full'>
            {!status ? (
              <Link to={'/'}>
                <button
                  type='button'
                  onClick={() => handleLogin()}
                  className={styleButton}
                >
                  <FaUser size={sizeIcon} /> Iniciar sesion
                </button>
              </Link>
            ) : (
              <>
                <div className='flex items-center gap-3'>
                  <FaUser size={sizeIcon} /> example@email.com
                </div>
                <button
                  onClick={() => handleStatus()}
                  className='mt-2 text-sm text-red'
                  type='button'
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </LayoutMin>
    </div>
  );
};
