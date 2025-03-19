import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Thunder",
      breed: "Arabian",
      price: "$15,000",
      image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.name} style={{ height: '150px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <strong>Breed:</strong> {item.breed}<br />
                      <strong>Price:</strong> {item.price}
                    </p>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <button className="btn btn-danger">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end mt-4">
            <h4>Total: $15,000</h4>
            <button className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;