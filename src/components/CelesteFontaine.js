// src/components/CelesteFontaine.js
import React, { useEffect } from 'react';
import '../styles/CelesteFontaine.css';
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';

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
            <section className="section" id="section1">Section 1</section>
            <section className="section" id="section2">Section 2</section>
            <section className="section" id="section3">Section 3</section>
        </div>
    );
};

export default CelesteFontaine;
