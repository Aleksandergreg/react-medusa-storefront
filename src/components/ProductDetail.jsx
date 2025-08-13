import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, removeSelectedProduct } from '../redux/productSlice';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.allProducts.selectedProduct);
    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail(productId);
        }
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    if (Object.keys(product).length === 0) {
        return (
            <div className="flex justify-center mt-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-lg mt-4 overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <img
                        className="w-full h-auto max-h-96 object-contain p-3"
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-2xl text-gray-700 mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-sm text-gray-500 italic">Category: {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;