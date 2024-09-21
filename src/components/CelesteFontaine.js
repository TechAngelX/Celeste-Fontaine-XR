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
                end: 'bottom 0%',
                scrub: true
            },
            scale: 1.5,
            duration: 2
        });

        // You can add similar animations for other sections if needed
    }, []);

    return (
        <div className="celeste-fontaine">
            <a href="/" className="back-to-home ricki-fade-in">Céleste Fontaine</a>

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
                <div className="content">
                    <h2>Section 2: Luxury Meets Innovation</h2>
                    <p>Explore Our Styles</p>
                    <ThreeDViewer/>  {/* Display your 3D model here */}
                </div>
            </section>

            <section className="section" id="section3">
                <div className="content">
                    <h2>Section 3: Contact Us</h2>
                    <ThreeDViewer/> {/* Display your 3D model here */}
                </div>
            </section>

            <section className="section" id="section4">
                <div className="content">
                    <h2>Section 4: Enter Website</h2>
                    <a href="/" className="back-to-home">Enter Website</a>
                </div>
            </section>
        </div>
    );
};

export default CelesteFontaine;
