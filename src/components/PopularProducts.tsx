import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PopularProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'Dahi Puri',
      price: '₹40',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be',
      description: 'Crispy puris filled with yogurt and chutneys'
    },
    {
      id: 2,
      name: 'Samosa Chaat',
      price: '₹50',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      description: 'Crushed samosas topped with chutneys and spices'
    },
    {
      id: 3,
      name: 'Bhel Puri',
      price: '₹30',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84',
      description: 'Puffed rice mixed with vegetables and tangy chutneys'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">Popular Items</h2>
          <p className="mt-2 text-gray-600">Our most loved dishes</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="py-4"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                  <div className="mt-2">
                    <span className="text-xl font-bold text-orange-600">{product.price}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;