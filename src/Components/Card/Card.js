import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing axios
import "./Card.css"; // Style the card component

function Card() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stores data from the API using Axios
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("http://localhost:7001/api/stores");
        setStores(response.data); // Axios response data
        setLoading(false);
      } catch (err) {
        setError("Failed to load stores.");
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="card-container">
      {stores.map((store) => (
        <div key={store.storeId} className="card">
          <div className="card-img"></div>
          <div className="card-info">
            <p className="text-title">{store.storeName}</p>
            <p className="text-body">{store.storeDescription}</p>
            <p className="text-address">{store.storeAddress}</p>
            <p className="text-rating">Rating: {store.storeRating} ★</p>
          </div>
          <div className="card-footer">
            <span className="text-title">More Info</span>
            <div className="card-button">
              <span className="next-icon">&#8594;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
