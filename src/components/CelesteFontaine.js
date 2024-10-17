import React, { useEffect } from 'react';
import Vanta from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import '../styles/CFXR-page2.css';

const CelesteFontaine = () => {
    useEffect(() => {
        // Initialize Vanta Background
        const vantaEffect = Vanta({
            el: '#vanta-background',
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x8c8c,
            color2: 0xf2e735,
            size: 0.20
        });

        // Initialize AOS for scroll animations
        AOS.init({ duration: 1000, once: true });

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, []);

    return (
        <div className="cfxr-p2-body">
            {/* Vanta Background */}
            <div id="vanta-background" className="vanta-background" />

            <div className="content-container">
                <div className="section" data-aos="fade-up">
                    <h1 className="cool-text">Welcome to Celeste Fontaine</h1>
                </div>
                <div className="section" data-aos="fade-up">
                    <h2 className="cool-text">Luxury Meets Innovation</h2>
                </div>
                <div className="section" data-aos="fade-up">
                    <h3 className="cool-text">Explore Our Styles</h3>
                    <div className="boxes-container">
                        <div className="box" data-aos="zoom-in">Box 1</div>
                        <div className="box" data-aos="zoom-in">Box 2</div>
                        <div className="box" data-aos="zoom-in">Box 3</div>
                    </div>
                </div>
                <div className="section" data-aos="fade-up">
                    <h4 className="cool-text">Contact Us</h4>
                </div>
                <div className="section" data-aos="fade-up">
                    <h4 className="cool-text">Enter Website</h4>
                </div>
            </div>
        </div>
    );
};

export default CelesteFontaine;
