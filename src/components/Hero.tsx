import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      title: 'Delicious Pizza',
      description: 'Hand-tossed pizza with fresh ingredients',
    },
    {
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Juicy Burgers',
      description: 'Premium beef burgers with special sauce',
    },
    {
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      title: 'Spicy Tacos',
      description: 'Authentic Mexican street tacos',
    },
    {
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224',
      title: 'Fresh Salads',
      description: 'Healthy and refreshing garden salads',
    },
    {
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee',
      title: 'Special Pasta',
      description: 'Handmade pasta with signature sauce',
    },
  ];

  return (
    <div className="h-screen relative">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative h-full flex flex-col justify-center items-center text-white px-4"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;