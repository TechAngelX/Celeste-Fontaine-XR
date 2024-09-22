import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CelesteFontaine.css';
import ThreeDViewer from './threeDViewer'; // Import your ThreeDViewer component here

const CelesteFontaine = () => {
    return (
        <div className="celeste-fontaine">
            <a href="/" className="ricki-fade-in">Céleste Fontaine</a>

            <section className="section" id="section1">
                <div className="content">
                    <h2>Section 1: Welcome to Celeste Fontaine</h2>
                    <video width="100%" height="auto" autoPlay loop muted>
                        <source src="/images/video/IntroVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="section" id="section2">
                <div className="content">
                    <h2>Section 2: Luxury Meets Innovation</h2>
                    <p>Explore Our Styles</p>
                    <ThreeDViewer />  {/* Display your 3D model here */}
                </div>
            </section>

            <section className="section" id="section3">
                <div className="content">
                    <h2>Section 3: Contact Us</h2>
                    <ThreeDViewer /> {/* Display your 3D model here */}
                </div>
            </section>

            <section className="section" id="section4">
                <div className="content">
                    <h2>Section 4: Enter Website</h2>
                    <Link to="/home">Enter Website</Link>  {/* Corrected Link path to "/home" */}
                </div>
            </section>
        </div>
    );
};

export default CelesteFontaine;
