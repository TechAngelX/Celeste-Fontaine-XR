import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/CelesteFontaine.css';
import ThreeDViewer from './threeDViewer';  // Import your ThreeDViewer component here

const CelesteFontaine = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#section1', {
            scrollTrigger: {
                trigger: '#section1',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true
            },
            scale: 1.5,
            duration: 2
        });
    }, []);

    return (
        <div className="celeste-fontaine">
            <a href="/" className="back-to-home">Back to Home</a>
            <section className="section" id="section1">
                Section 1: Welcome to Celeste Fontaine
            </section>
            <section className="section" id="section2">
                Section 2: Explore Our Features
                <ThreeDViewer /> {/* Display your 3D model here */}
            </section>
            <section className="section" id="section3">
                Section 3: Contact Us
            </section>
        </div>
    );
};

export default CelesteFontaine;
