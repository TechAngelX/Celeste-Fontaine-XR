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
            gyroControls: true,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x767676,
            color2: 0x3c3c3c,
            speed: 2.00,
            size: 0.20



        });

        // Initialize AOS for scroll animations
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

        // Clean up on component unmount
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

                    <div className="boxes-container">
                        <div className="glass-box" data-aos="zoom-in">
                            <img src="/images/clothes/shoes-4.png" alt="Shoes"
                                 style={{maxWidth: '100%', borderRadius: '15px'}}/>
                            <h4>Box Table 1</h4>
                            <p>Description for box table 1.</p>
                        </div>
                        <div className="glass-box" data-aos="zoom-in">
                            <img src="/images/clothes/bballcap-1.png" alt="baseball cap"
                                 style={{maxWidth: '100%', borderRadius: '15px'}}/>
                            <h4>Box Table 2</h4>
                            <p>Description for box table 2.</p>
                        </div>
                        <div className="glass-box" data-aos="zoom-in">
                            <img src="/images/clothes/hoodie-1.png" alt="hoodie"
                                 style={{maxWidth: '100%', borderRadius: '15px'}}/>
                            <h4>Box Table 3</h4>
                            <p>Description for box table 3.</p>
                        </div>
                    </div>
                </div>
                <div className="section" data-aos="fade-up">
                    <h3 className="cool-text">Explore Our Styles</h3>
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
