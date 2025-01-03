import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SpicyProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'Masala Puri',
      price: '₹40',
      spiceLevel: 'Hot',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be',
      description: 'Spicy and tangy puris with special masala'
    },
    {
      id: 2,
      name: 'Mirchi Pakoda',
      price: '₹30',
      spiceLevel: 'Very Hot',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      description: 'Deep-fried chili fritters with spices'
    },
    {
      id: 3,
      name: 'Teekha Samosa',
      price: '₹25',
      spiceLevel: 'Medium Hot',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
      description: 'Spicy potato filled pastry with green chilies'
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
          <h1 className="text-4xl font-bold text-gray-900">Spicy Delights</h1>
          <p className="mt-4 text-lg text-gray-600">For those who love it hot!</p>
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
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.spiceLevel}
                </div>
              </div>
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

export default SpicyProducts