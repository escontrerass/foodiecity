import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { SiteCarousel } from '../components/SiteCarousel';
import { Section } from './Section';

export const Carousel = (props) => {
  const { title, data, link } = props;

  return (
    <Section title={title} buttonTitle='Ver mas' linkButton={link}>
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
    </Section>
  );
};
