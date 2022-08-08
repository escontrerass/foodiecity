import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutMin } from '../containers/LayoutMin';
import { menuContext } from '../context/menuContext';
import { ItemMenu } from '../components/ItemMenu';
import { AiFillSound, AiFillHome, AiFillShop } from 'react-icons/ai';
import { FaDumpsterFire, FaUser, FaUserEdit } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { CgPhone } from 'react-icons/cg';
import { BiCategoryAlt } from 'react-icons/bi';

export const AppMenu = () => {
  const { menu, setMenu, status, setStatus, setLogin, setSignIn, setBusiness } =
    React.useContext(menuContext);
  const sizeIcon = '1.5rem';
  const handleClick = () => setMenu(!menu);
  const handleLogin = () => {
    setMenu(!menu);
    setLogin(true);
  };
  const handleSignIn = () => {
    setMenu(!menu);
    setSignIn(true);
  };
  const handleBusiness = () => {
    setMenu(!menu);
    setBusiness(true);
  };
  const handleLogout = () => setStatus(!status);

  return (
    <div className='fixed flex flex-col justify-between top-0 pt-28 bg-white w-full h-screen z-10 border-none tablet:w-1/2 border-r border-blue-gray-300'>
      <LayoutMin menu={true} footer={true}>
        <div className='flex flex-col justify-between px-10 h-full z-30'>
          <div className='flex flex-col gap-5'>
            <Link to={'/'}>
              <ItemMenu
                title='Inicio'
                icon={<AiFillHome size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='category'>
              <ItemMenu
                title='Categorías'
                icon={<BiCategoryAlt size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='news'>
              <ItemMenu
                title='Sitios nuevos'
                icon={<AiFillSound size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='popular'>
              <ItemMenu
                title='Sitios populares'
                icon={<FaDumpsterFire size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='about'>
              <ItemMenu
                title='Quienes somos'
                icon={<BsPeopleFill size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='support'>
              <ItemMenu
                title='Soporte'
                icon={<RiCustomerService2Fill size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
            <Link to='contact'>
              <ItemMenu
                title='Contacto'
                icon={<CgPhone size={sizeIcon} />}
                handle={handleClick}
              />
            </Link>
          </div>
        </div>
        <div className='h-36 bg-gradient-to-t from-amber-200'>
          <div className='flex flex-col gap-3 w-full px-10'>
            {!status ? (
              <>
                <Link to={'/'}>
                  <ItemMenu
                    title='Registrarme'
                    icon={<FaUserEdit size={sizeIcon} />}
                    handle={handleSignIn}
                  />
                </Link>
                <Link to={'/'}>
                  <ItemMenu
                    title='Iniciar sesión'
                    icon={<FaUser size={sizeIcon} />}
                    handle={handleLogin}
                  />
                </Link>
              </>
            ) : (
              <>
                <ItemMenu
                  title='Agregar negocio'
                  icon={<AiFillShop size={sizeIcon} />}
                  handle={handleBusiness}
                />
                <div className='flex items-center gap-3'>
                  <FaUser size={sizeIcon} /> example@email.com
                </div>
                <button
                  onClick={() => handleLogout()}
                  className='mt-2 text-sm text-red mb-5'
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
