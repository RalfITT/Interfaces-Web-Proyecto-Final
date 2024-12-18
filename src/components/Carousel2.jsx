import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';

import CarCard from './CarCard';
import useAutos from "../hooks/useAutos";

export default function () {

  const { autos } = useAutos();

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold mx-auto flex justify-center'>
        Conoce tu próximo vehículo
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
        breakpoints={{
          // Tamano máximo de pantalla y configuración
          0: {
            slidesPerView: 1, // Para pantallas pequeñas
            spaceBetween: 10,
          },
          850: {
            slidesPerView: 2, // Para tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Para desktops medianos
            spaceBetween: 30,
          },
        }}

      >
        { autos.slice(0, 6).map((auto) => (
          <SwiperSlide key={auto.id}>
            <CarCard
              auto={auto}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
