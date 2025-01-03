import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">About Baccha Chaat Corner</h1>
            <p className="text-lg text-gray-600">
              Founded in 2010, Baccha Chaat Corner has been serving authentic Indian street food
              to the people of Phaphamau, Prayagraj. Our passion for traditional flavors and
              commitment to quality has made us a beloved destination for food lovers.
            </p>
            <p className="text-lg text-gray-600">
              Every dish we serve is prepared with love and care, using traditional recipes
              passed down through generations. We take pride in maintaining the authentic taste
              while ensuring the highest standards of hygiene and quality.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="Restaurant Owner"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;