import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CFXR = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/CelesteFontaine");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="cfxr-container">
            <h1>Welcome to CFXR</h1>
            <p>Loading the Celeste Fontaine experience...</p>
        </div>
    );
};

export default CFXR;
