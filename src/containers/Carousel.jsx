import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { SiteCarousel } from '../components/SiteCarousel';
import { Section } from './Section';

export const Carousel = (props) => {
  const { title, buttonTitle, data, link } = props;

  return (
    <Section title={title} buttonTitle={buttonTitle} linkButton={link}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          670: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {data &&
          data.map((site) => (
            <SwiperSlide key={site.id}>
              <SiteCarousel {...site} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Section>
  );
};
