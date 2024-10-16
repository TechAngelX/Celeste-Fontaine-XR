import React from 'react';
import '../styles/LoadingSpinner.css'; // Optional: Add your CSS for styling

const LoadingSpinner = () => (
    <div className="spinner-container">
        <div className="spinner"></div>
        <style>{`
            .spinner-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .spinner {
                border: 8px solid #f3f3f3; /* Light gray */
                border-top: 8px solid #3498db; /* Blue */
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

export default LoadingSpinner;
