import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Reviews from '../components/Reviews';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <PopularProducts />
      <Reviews />
    </div>
  );
};

export default Home;