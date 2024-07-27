import React from 'react';


const ProductCard = ({ product }) => {
  return (
    
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  </div>
    
  );
};

export default ProductCard;