import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';
import { Navigation } from 'swiper/modules';

const Slider = ({images}) => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-center" />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  );
};

export default Slider;