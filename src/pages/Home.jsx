import React from 'react';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold grid gap-4 md:grid-cols-2 lg:grid-cols-3" >Home Page</h1>
      <p>Welcome to the Home page!</p>
    </Layout>
  );
};

export default Home;