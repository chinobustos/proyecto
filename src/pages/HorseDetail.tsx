import React from 'react';
import { useParams } from 'react-router-dom';

const HorseDetail = () => {
  const { id } = useParams();
  
  // Mock data for demonstration
  const horse = {
    id: parseInt(id || "1"),
    name: "Thunder",
    breed: "Arabian",
    age: 5,
    color: "Bay",
    height: "15.2 hands",
    price: "$15,000",
    description: "A beautiful Arabian horse with excellent bloodlines. Well-trained and perfect for both competition and leisure riding.",
    image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={horse.image} className="img-fluid rounded" alt={horse.name} />
        </div>
        <div className="col-md-6">
          <h2>{horse.name}</h2>
          <p className="lead">{horse.breed}</p>
          <hr />
          <div className="mb-3">
            <h4>Details</h4>
            <p><strong>Age:</strong> {horse.age} years</p>
            <p><strong>Color:</strong> {horse.color}</p>
            <p><strong>Height:</strong> {horse.height}</p>
            <p><strong>Price:</strong> {horse.price}</p>
          </div>
          <div className="mb-4">
            <h4>Description</h4>
            <p>{horse.description}</p>
          </div>
          <button className="btn btn-primary btn-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default HorseDetail;