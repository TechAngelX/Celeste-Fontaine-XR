import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeDViewer = () => {
    const mountRef = useRef(null);
    const objectRef1 = useRef(null); // Reference for the first loaded object
    const objectRef2 = useRef(null); // Reference for the second loaded object

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const objLoader = new OBJLoader();

        // Load the first model
        objLoader.load('/3dmodels/Mens_Jacket_CFXR_BASIC.obj', (object) => {
            object.scale.set(0.01, 0.01, 0.01);
            object.position.set(0, -1, 3);
            scene.add(object);
            objectRef1.current = object; // Store the first loaded object
            console.log('First model loaded successfully');
        }, undefined, (error) => {
            console.error('Error loading first model:', error);
        });

        // Load the second model
        objLoader.load('/3dmodels/test.obj', (object) => {
            object.scale.set(0.01, 0.01, 0.01);
            object.position.set(2, -1, 3); // Adjust position for the second model
            scene.add(object);
            objectRef2.current = object; // Store the second loaded object
            console.log('Second model loaded successfully');
        }, undefined, (error) => {
            console.error('Error loading second model:', error);
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const handleScroll = () => {
            if (objectRef1.current) {
                const scrollY = window.scrollY;
                objectRef1.current.rotation.x = scrollY * 0.001;
                objectRef1.current.rotation.y = scrollY * 0.001;
            }
            if (objectRef2.current) {
                const scrollY = window.scrollY;
                objectRef2.current.rotation.x = scrollY * 0.001;
                objectRef2.current.rotation.y = scrollY * 0.001;
            }
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ height: '100vh' }} />;
};

export default ThreeDViewer;