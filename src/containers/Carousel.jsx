import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { SiteCarousel } from '../components/SiteCarousel';
import { Link } from 'react-router-dom';

export const Carousel = ({ title, data, link }) => {
  const redirection = `/${link}`;
  return (
    <div className=''>
      <div className='flex justify-between mb-3'>
        <h3 className='font-bebas text-xl'>{title}</h3>
        <Link to={redirection}>
          <button className='bg-red text-white px-4 py-1 rounded-2xl text-s font-mont'>
            Ver mas
          </button>
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data &&
          data.map((site) => (
            <SwiperSlide key={site.id}>
              <SiteCarousel {...site} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
