import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="h-16 mb-2">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h2>
          </div>
          <div className="mt-auto">
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;