import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CFXR-page2.css';
import ThreeDViewer from './ThreeDViewer';
import Vanta from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';

const CelesteFontaine = () => {
    useEffect(() => {
        const vantaEffect = Vanta({
            el: '#vanta-background',
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x0,
            color2: 0x3c3c3c,
            size: 0.20
        });

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

            <Link to="/" className="page-title">Céleste Fontaine</Link>

            <section className="section" id="section1">
                <div className="content">
                    <h2>Welcome to Celeste Fontaine</h2>
                    <video className="intro-video" autoPlay loop muted>
                        <source src="/images/video/IntroVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="section" id="section2">
                <div className="content">
                    <h2>Luxury Meets Innovation</h2>
                    <p>Explore Our Styles</p>
                    <ThreeDViewer />
                </div>
            </section>

            <section className="section" id="section3">
                <div className="content">
                    <h2>Contact Us</h2>
                    <ThreeDViewer />
                </div>
            </section>

            <section className="section" id="section4">
                <div className="content">
                    <h2>Enter Website</h2>
                    <Link to="/home" className="enter-link">Enter Website</Link>
                </div>
            </section>
        </div>
    );
};

export default CelesteFontaine;
