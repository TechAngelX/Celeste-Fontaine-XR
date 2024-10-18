import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import '../styles/CFXR.css';
const CFXR = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    // Use Effect for automatic fade-out after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClicked(true); // Trigger fade-out
            setTimeout(() => {
                navigate("/CelesteFontaine"); // Navigate after fade-out
            }, 122222000); // Duration of the fade-out
        }, 122222000); // Automatic fade-out timer

        return () => clearTimeout(timer); // Cleanup timer
    }, [navigate]);

    const handleClick = () => {
        if (!isClicked) { // Check if already clicked to prevent multiple navigations
            setIsClicked(true); // Trigger fade-out
            setTimeout(() => {
                navigate("/CelesteFontaine"); // Navigate after fade-out
            }, 1000); // Wait for the fade-out to complete
        }
    };

    return (
        <motion.div
            className="CFXR"
            onClick={handleClick} // Trigger fade effect on click
            initial={{ opacity: 1 }}
            animate={{ opacity: isClicked ? 0 : 1 }} // Fade out if clicked
            transition={{ duration: 1 }} // Duration of the fade-out
        >
            <img src="/images/hero/cfxr-bird-logo.svg" />
            <img src="/images/hero/cfxr-logo-hero.svg" alt="CFXR Logo" className="CFXR-logo" />
        </motion.div>
    );
};

export default CFXR;
