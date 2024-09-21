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
                end: 'bottom z0%',
                scrub: true
            },
            scale: 1.5,
            duration: 2
        });
    }, []);

    return (
        <div className="celeste-fontaine">
            <a href="/" className="back-to-home">Céleste Fontaine</a>
            <section className="section" id="section1">
                <div className="content">
                    <h2>Section 1: Welcome to Celeste Fontaine</h2>
                    <video width="100%" height="auto" autoPlay loop muted>
                        <source src="/images/video/IntroVid.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="section" id="section2">
                Section 2: Explore Our Features
                <ThreeDViewer/> {/* Display your 3D model here */}
            </section>
            <section className="section" id="section3">
                Section 3: Contact Us
                <ThreeDViewer/> {/* Display your 3D model here */}

            </section>
        </div>
    );
};

export default CelesteFontaine;
