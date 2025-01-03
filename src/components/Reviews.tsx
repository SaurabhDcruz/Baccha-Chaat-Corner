import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = [
    {
      id: 1,
      name: 'Rahul Kumar',
      rating: 5,
      comment: 'Best chaat in Prayagraj! The pani puri is absolutely amazing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    {
      id: 2,
      name: 'Priya Singh',
      rating: 5,
      comment: 'Love the variety of chaats. Everything is so fresh and tasty!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
      id: 3,
      name: 'Amit Patel',
      rating: 5,
      comment: 'Great service and amazing food. The samosas are perfect!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
          <p className="mt-4 text-lg text-gray-600">What our customers say about us</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="py-8"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="max-w-md">
              <motion.div className="bg-white rounded-lg shadow-lg p-6 mx-4">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;