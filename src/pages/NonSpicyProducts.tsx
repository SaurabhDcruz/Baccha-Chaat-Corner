import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NonSpicyProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'Sweet Corn Chaat',
      price: '₹35',
      image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088',
      description: 'Steamed corn kernels with butter and mild seasoning'
    },
    {
      id: 2,
      name: 'Dahi Bhalla',
      price: '₹45',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be',
      description: 'Soft lentil dumplings in creamy yogurt'
    },
    {
      id: 3,
      name: 'Fruit Chaat',
      price: '₹40',
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea',
      description: 'Fresh fruits with sweet and tangy dressing'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Mild Flavors</h1>
          <p className="mt-4 text-lg text-gray-600">Delicious treats without the heat!</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NonSpicyProducts;