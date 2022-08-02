import React from 'react';
import { Section } from './Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export const CarouselInfinite = (props) => {
  const { title, buttonTitle, data, name, linkButton, setModal, setModalImg } =
    props;
  const handleMax = (img) => {
    setModal(true);
    setModalImg(img);
  };

  return (
    <Section title={title} buttonTitle={buttonTitle} linkButton={linkButton}>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map((imag, index) => (
          <SwiperSlide key={index}>
            <img
              onClick={() => handleMax(imag)}
              className='rounded-lg w-full h-40'
              src={imag}
              alt={name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
