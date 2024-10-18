import React from 'react';
import '../styles/CFXR-page2.css';

const CelesteFontaine = () => {
    return (
        <div className="cfxr-p2-body">
            <div className="content-container">

                {/* Section 1: Introduction */}
                <div className="section first-section">
                    <div className="text-content">
                        <h2 className="cool-text">Style With Passion</h2>
                        <h2 className="cool-text">Luxury Meets Innovation</h2>
                        <p className="description">
                            Céleste Fontaine, founded in 1989 by Céleste Nyoma Fontaine...
                        </p>
                    </div>
                </div>

                {/* Section 2: Grid Layout (Text on Left, Image on Right) */}
                <div className="section second-section">
                    <div className="grid-layout">
                        <div className="text-content">
                            <h3 className="cool-text">Innovative Designs</h3>
                            <p>Explore our latest collection that combines tradition and modernity.</p>
                        </div>
                        <div className="image-content">
                            <img src="/images/clothes/shoes-4.png" alt="Shoes" />
                        </div>
                    </div>
                </div>

                {/* Section 3: Video Spanning the Whole Page */}
                <div className="section video-section">
                    <video controls className="full-width-video">
                        <source src="/videos/your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Section 4: Three Grid of Image Boxes */}
                <div className="section fourth-section">
                    <h3 className="cool-text">Explore Our Styles</h3>
                    <div className="boxes-container">
                        <div className="glass-box">
                            <img src="/images/clothes/shoes-4.png" alt="Shoes" />
                            <h4>Box Table 1</h4>
                            <p>Description for box table 1.</p>
                        </div>
                        <div className="glass-box">
                            <img src="/images/clothes/bballcap-1.png" alt="Baseball Cap" />
                            <h4>Box Table 2</h4>
                            <p>Description for box table 2.</p>
                        </div>
                        <div className="glass-box">
                            <img src="/images/clothes/hoodie-1.png" alt="Hoodie" />
                            <h4>Box Table 3</h4>
                            <p>Description for box table 3.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5: Highlighting Virtual Try-On Technology */}
                <div className="section fifth-section">
                    <h4 className="cool-text">Experience the softWEAR Virtual Try-On Technology</h4>

                    <div className="highlight-bottom-line">
                        <p>Discover a new way to shop with our innovative technology!</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CelesteFontaine;
