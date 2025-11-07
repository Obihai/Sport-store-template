
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}/`);
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    const handleAddToCart = useCallback(() => {
        addToCart(product);
    }, [addToCart, product]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
}

export default ProductDetail;
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
