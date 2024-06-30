import React from 'react';

const ProductCard = ({ product }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
    
  );
};

export default ProductCard;