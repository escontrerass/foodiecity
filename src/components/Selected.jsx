import React from 'react';
import { Rating } from './Rating';
import { Review } from './Review';
import { Section } from '../containers/Section';
import { Rrss } from './Rrss';
import { sitesList, categoryList } from '../data';
import { BsWhatsapp, BsLink45Deg } from 'react-icons/bs';
import { MdLocationPin, MdPhoneInTalk } from 'react-icons/md';
import { CarouselInfinite } from '../containers/CarouselInfinite';
import { useLocation } from 'react-router-dom';
import { Carousel } from '../containers/Carousel';
import mapPhoto from '../assets/map.png';

export const Selected = (props) => {
  const {
    name,
    rating,
    reviews,
    status,
    category,
    address,
    phone,
    description,
    imagen,
    menu,
    hours,
    setModal,
    setModalImg,
    map,
    webside,
  } = props;
  const windowWidth = window.innerWidth;
  const location = useLocation();
  const categoryName = categoryList.filter((ctg) => ctg.id === category);
  const sizeIcon = '2rem';
  const miniIcon = windowWidth < 1000 ? '1rem' : '1.5rem';
  const colorIcon = 'red';

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1 dt: grid grid-cols-2 gap-8'>
        <div className='flex flex-col gap-1'>
          <p className='font-bebas text-2xl dt:text-3xl'>{name}</p>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Rating rating={rating} />
              <p className='text-s'>{reviews.length} Calificaciones</p>
            </div>
            {status ? (
              <p className='inline rounded-xl text-s py-1 px-5 bg-yellow font-bold'>
                Abierto
              </p>
            ) : (
              <p className='inline rounded-xl text-sm py-1 px-4 bg-red font-bold text-white'>
                Cerrado
              </p>
            )}
          </div>
          <p className='bg-red text-white text-s px-2 py-1 rounded-xl w-fit dt:text-sm'>
            {categoryName[0].name}
          </p>
          <p className='flex text-sm items-center gap-3 dt:text-sm'>
            <MdLocationPin size={miniIcon} /> {address}
          </p>
          <p className='flex text-sm items-center gap-3 dt:text-sm'>
            <MdPhoneInTalk size={miniIcon} /> +58 {phone.slice(1, phone.length)}
          </p>
          {windowWidth > 1000 && (
            <p className='text-sm dt:text-sm'>Descripción: {description}</p>
          )}
        </div>
        {windowWidth && (
          <div>
            <img src={mapPhoto} alt={name} />
          </div>
        )}
      </div>
      <div className='flex justify-around'>
        <a
          href={`https://wa.me/+58${phone.slice(1, phone.length)}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex flex-col items-center'>
            <BsWhatsapp color={colorIcon} size={sizeIcon} />
            <p className='text-red text-s'>Whatsapp</p>
          </div>
        </a>
        <a href={map} target='_blank' rel='noopener noreferrer'>
          <div className='flex flex-col items-center'>
            <MdLocationPin color={colorIcon} size={sizeIcon} />
            <p className='text-red text-s'>Como llegar</p>
          </div>
        </a>
        <div className='flex flex-col items-center'>
          <MdPhoneInTalk color={colorIcon} size={sizeIcon} />
          <p className='text-red text-s'>Llamar</p>
        </div>
        <a href={webside} target='_blank' rel='noopener noreferrer'>
          <div className='flex flex-col items-center'>
            <BsLink45Deg color={colorIcon} size={sizeIcon} />
            <p className='text-red text-s'>Sitio web</p>
          </div>
        </a>
      </div>
      {windowWidth < 1000 && <p className='text-sm'>{description}</p>}
      <Section
        title='Reseñas'
        buttonTitle='Ver mas'
        linkButton={`${location.pathname}/reviews`}
      >
        <Review review={reviews[reviews.length - 1]} />
        {windowWidth > 1000 && (
          <>
            <Review review={reviews[reviews.length - 2]} />
            <Review review={reviews[reviews.length - 3]} />
          </>
        )}
      </Section>
      <CarouselInfinite
        title='Fotos'
        buttonTitle='Ver mas'
        data={imagen}
        name={name}
        linkButton={`${location.pathname}/photos`}
        setModal={setModal}
        setModalImg={setModalImg}
      />
      <CarouselInfinite
        title='Menu'
        data={menu}
        name={name}
        setModal={setModal}
        setModalImg={setModalImg}
      />
      <Section title='Horarios'>
        {windowWidth < 1000 ? (
          hours.map((hour, index) => (
            <div key={index} className='flex justify-between text-sm '>
              <p>{hour.split(',')[0]}</p>
              <p>{hour.split(',')[1]}</p>
            </div>
          ))
        ) : (
          <div className='grid grid-cols-2 grid-rows-4 gap-x-5'>
            {hours.map((hour, index) => (
              <div key={index} className='flex justify-between text-sm '>
                <p>{hour.split(',')[0]}</p>
                <p>{hour.split(',')[1]}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
      <div className='flex justify-between'>
        <h3 className='font-bebas text-xl dt:text-2xl'>Redes sociales</h3>
        <Rrss />
      </div>
      <Carousel
        title='Recomendaciones'
        buttonTitle='Ver más'
        data={sitesList}
        link='/'
      />
    </div>
  );
};
