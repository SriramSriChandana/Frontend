import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Store.css';

const Store = () => {
    const [storeData, setStoreData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Fetch store details from backend
        const fetchStoreData = async () => {
            try {
                const response = await axios.get('http://localhost:9099/store/details');
                setStoreData(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
        };
        
        fetchStoreData();
    }, []);

    const handleEnterStore = (storeId) => {
        navigate(`/store/${storeId}/products`);
    };

    if (!storeData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="store-container">
            <h1 className="store-title">Your Store</h1>
            <div className="store-card">
                <div className="store-image">
                    <img 
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/store-management-2578595-2147697.png" 
                        alt="Store"
                    />
                </div>
                <div className="store-details">
                    <h2>{storeData.storeName}</h2>
                    <p><strong>Location:</strong> {storeData.location}</p>
                    <p><strong>Region:</strong> {storeData.region}</p>
                    <p><strong>Store ID:</strong> {storeData.storeId}</p>
                    <p><strong>Status:</strong> 
                        <span className={`status ${storeData.status ? 'active' : 'inactive'}`}>
                            {storeData.status ? 'Active' : 'Inactive'}
                        </span>
                    </p>
                    <button 
                        className="enter-button"
                        onClick={() => handleEnterStore(storeData.storeId)}
                    >
                        Enter Store
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Store;
