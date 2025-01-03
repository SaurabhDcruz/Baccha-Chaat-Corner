import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Routes, Route, Link } from 'react-router-dom';

const CategoryCard = ({ title, image, path }: { title: string; image: string; path: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <Link to={path}>
        <div className="relative h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

const Categories = () => {
  const categories = [
    {
      title: 'Spicy',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      path: '/categories/spicy',
    },
    {
      title: 'Non-Spicy',
      image: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a',
      path: '/categories/non-spicy',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Categories
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;