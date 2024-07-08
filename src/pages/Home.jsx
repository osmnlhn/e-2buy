import React from 'react';
import Layout from '../layout/Layout';
import Slider from '../components/Slider';

const sliderImages = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
];

const Home = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold" >Home Page</h1>
      <Slider images={sliderImages} />
      <p>Welcome to the Home page!</p>
    </Layout>
  );
};

export default Home;