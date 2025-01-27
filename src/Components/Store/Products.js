import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { storeId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:9099/store/${storeId}/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [storeId]);

    return (
        <div className="products-container">
            <h1 className="products-title">Store Products</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">₹{product.price}</p>
                            <p className="product-stock">In Stock: {product.stockQuantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;