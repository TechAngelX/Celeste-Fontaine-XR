import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';
import '../styles/CelesteFontaine.css'; // Import component-specific CSS
import '../styles/fonts.css'; // Import component-specific CSS

const CelesteFontaine = () => {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#section1',
            duration: '100%',
            triggerHook: 0.5
        })
            .setTween(TweenMax.to('#section1', 1, { scale: 1.5 }))
            .addIndicators() // Optional for debugging
            .addTo(controller);
    }, []);

    return (
        <div className="celeste-fontaine">
            <a href="/" className="back-to-home">Back to Home</a>
            <section className="section" id="section1">Section 1: Welcome to Celeste Fontaine</section>
            <section className="section" id="section2">Section 2: Explore Our Features</section>
            <section className="section" id="section3">Section 3: Contact Us</section>
        </div>
    );
};

export default CelesteFontaine;
