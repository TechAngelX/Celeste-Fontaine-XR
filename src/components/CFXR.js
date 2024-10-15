import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/CFXR.css'; // Make sure to import your CSS file

const CFXR = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/CelesteFontaine");
        }, 20000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="CFXR"> {/* Use the class name defined in your CSS */}
            <img src="/images/hero/cfxr-logo-hero.svg" alt="CFXR Logo" className="CFXR-logo" /> {/* Use the class name defined in your CSS */}
        </div>
    );
};

export default CFXR;
