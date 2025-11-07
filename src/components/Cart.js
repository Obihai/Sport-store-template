
import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-group">
                    {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.name} - ${item.price} x {item.quantity}
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between align-items-center active">
                        <strong>Total:</strong>
                        <strong>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Cart;
