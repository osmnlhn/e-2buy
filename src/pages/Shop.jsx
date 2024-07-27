import React from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../layout/Layout';
//

const Content = () => {

  const products = [
    { id: 1,image:'', name: 'Product A', price: 19.99, description: 'Lorem ipsum dolor sit amet.' },
    { id: 2,imgae:'', name: 'Product B', price: 29.99, description: 'Consectetur adipiscing elit.' },
    { id: 3,image:'', name: 'Product C', price: 39.99, description: 'Sed do eiusmod tempor incididunt' },
  ];

  return (
    <Layout> 
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {products.map((product) => (
         <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
    </div>
    </Layout> 
  );
};


export default Content;