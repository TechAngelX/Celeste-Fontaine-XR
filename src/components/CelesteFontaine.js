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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.

                    Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.

                    In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.

                    Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nulla facilisi. Praesent vitae eros. Vestibulum a velit eu ante scelerisque vulputate. Morbi fringilla libero at dolor. Duis malesuada pharetra urna. Donec et nisi purus. Maecenas facilisis vehicula metus, et consequat eros condimentum eget. Duis euismod mi sit amet convallis sodales. Vivamus at justo imperdiet, posuere ligula vitae, pulvinar nulla.

                    Aliquam non enim volutpat, volutpat purus sit amet, volutpat velit. Fusce pellentesque nisi velit, ac elementum arcu euismod non. Proin aliquam dapibus ligula, ac feugiat dui ultricies et. Nam vehicula vel neque at porttitor. Aenean consequat gravida odio. Integer bibendum mauris et eros lacinia sagittis. Phasellus ac mauris vel orci congue ultricies et non libero. Suspendisse dictum magna eget nisl auctor sodales. Mauris pellentesque nulla et lectus interdum, et aliquet magna tincidunt.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra dolor nec tortor sollicitudin feugiat. Ut vulputate lectus nec risus efficitur, at interdum sem porttitor. Phasellus sit amet finibus purus, a sollicitudin orci. Proin at mauris eget nunc feugiat tincidunt nec non urna. Curabitur at nulla sapien. Sed quis ultricies sem, ut condimentum ipsum. Suspendisse pulvinar neque quis turpis feugiat, at varius elit fringilla. Integer placerat justo et malesuada tempus. Nulla dictum lectus id sollicitudin auctor.

                    Curabitur faucibus neque sed urna fermentum efficitur. Suspendisse potenti. Integer tincidunt massa a sapien congue, eget dignissim felis porttitor. Sed vitae dolor non augue tincidunt vulputate. Cras non erat nisi. Nulla facilisi. Sed non felis ac sapien finibus malesuada nec in arcu. Aliquam erat volutpat. Donec viverra, tortor ac pulvinar vehicula, mi purus scelerisque nulla, sed ullamcorper nunc purus ut enim. Morbi ullamcorper, arcu id consectetur auctor, nunc sapien cursus nunc, non fermentum justo felis at enim.

                    Ut volutpat, purus at vehicula luctus, sem est pharetra elit, at molestie urna felis ac lorem. Suspendisse potenti. Proin a enim a leo lacinia volutpat nec quis turpis. Suspendisse viverra metus nec odio iaculis, ac faucibus dui volutpat. Etiam at ligula non nisl commodo fermentum. Phasellus fermentum libero sit amet nisi gravida, nec aliquet purus fermentum. Aliquam vulputate, tortor a dapibus mollis, lorem est elementum risus, vel laoreet erat sem vel turpis.

                    Donec sed mi vitae erat dapibus efficitur. Nam vitae pharetra lorem. Maecenas aliquam, urna et porta vehicula, nisi lorem venenatis metus, at facilisis lacus sapien et nisi. Donec a erat non ligula consequat tincidunt. Morbi non nisi ac leo hendrerit male

                </div>
            </div>
        </div>
    );
};

export default CelesteFontaine;
