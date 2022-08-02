import React from 'react';
import { Rating } from './Rating';
import { Review } from './Review';
import { Section } from '../containers/Section';
import { Rrss } from './Rrss';
import { categoryList } from '../data';
import { BsWhatsapp, BsLink45Deg } from 'react-icons/bs';
import { MdLocationPin, MdPhoneInTalk } from 'react-icons/md';
import { CarouselInfinite } from '../containers/CarouselInfinite';
import { useLocation } from 'react-router-dom';

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
  } = props;
  const location = useLocation();
  const categoryName = categoryList.filter((ctg) => ctg.id === category);
  const sizeIcon = '2rem';
  const colorIcon = 'red';

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <p className='font-bebas text-2xl'>{name}</p>
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
        <p className='bg-red text-white text-s px-2 py-1 rounded-xl w-fit'>
          {categoryName[0].name}
        </p>
        <p className='flex text-sm items-center gap-3'>
          <MdLocationPin /> {address}
        </p>
        <p className='flex text-sm items-center gap-3'>
          <MdPhoneInTalk /> +58 {phone.slice(1, phone.length)}
        </p>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center'>
          <BsWhatsapp color={colorIcon} size={sizeIcon} />
          <p className='text-red text-s'>Whatsapp</p>
        </div>
        <div className='flex flex-col items-center'>
          <MdLocationPin color={colorIcon} size={sizeIcon} />
          <p className='text-red text-s'>Como llegar</p>
        </div>
        <div className='flex flex-col items-center'>
          <MdPhoneInTalk color={colorIcon} size={sizeIcon} />
          <p className='text-red text-s'>Llamar</p>
        </div>
        <div className='flex flex-col items-center'>
          <BsLink45Deg color={colorIcon} size={sizeIcon} />
          <p className='text-red text-s'>Sitio web</p>
        </div>
      </div>
      <p className='text-sm'>{description}</p>
      <Section
        title='Reseñas'
        buttonTitle='Ver mas'
        linkButton={`${location.pathname}/reviews`}
      >
        <Review review={reviews[reviews.length - 1]} />
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
        {hours.map((hour, index) => (
          <div key={index} className='flex justify-between text-sm'>
            <p>{hour.split(',')[0]}</p>
            <p>{hour.split(',')[1]}</p>
          </div>
        ))}
      </Section>
      <div className='flex justify-between'>
        <h3 className='font-bebas text-xl'>Reseñas</h3>
        <Rrss />
      </div>
    </div>
  );
};
