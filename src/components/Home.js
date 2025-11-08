
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to our eCommerce Store!</h1>
                <p className="lead">We have the best products for you. Check them out!</p>
                <hr className="my-4" />
                <p>Click the button below to see our products.</p>
                <Link className="btn btn-primary btn-lg" to="/products" role="button">View Products</Link>
            </div>
        </div>
    );
}

export default Home;
