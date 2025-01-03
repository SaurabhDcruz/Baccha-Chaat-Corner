import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: 'Spicy',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      description: 'Hot and spicy street food favorites',
      path: '/categories/spicy'
    },
    {
      title: 'Non-Spicy',
      image: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a',
      description: 'Mild and flavorful delicacies',
      path: '/categories/non-spicy'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Categories</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our diverse menu options</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Link to={category.path}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/90">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;