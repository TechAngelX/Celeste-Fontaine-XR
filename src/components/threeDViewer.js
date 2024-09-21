import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeDViewer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const objLoader = new OBJLoader();
        objLoader.load('/3dmodels/Mens_Jacket_CFXR_BASIC.obj', (object) => {
            object.scale.set(0.01, 0.01, 0.01);  // Adjust scale if necessary
            object.position.set(0, -1, 0); // Adjust position
            scene.add(object);

        });


        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeDViewer;
