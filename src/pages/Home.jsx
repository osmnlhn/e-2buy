import React from 'react';
import Layout from '../layout/Layout';
import Slider from '../components/Slider';
import image1 from '../assets/sd1.jpg'
import image2 from '../assets/sd2.jpg'
import image3 from '../assets/sd3.jpg'
//<h1 className="text-4xl font-bold" >Home Page</h1>


const sliderImages = [
  image1,
  image2,
  image3,
];

const Home = () => {
  return (
    <Layout>
      <div className="slide-container"> 
      <Slider images={sliderImages}/>
      </div>
      <p>Welcome to the Home page!</p>
    </Layout>
  );
};

export default Home;