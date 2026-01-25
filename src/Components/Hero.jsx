// Hero.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../Styling/Hero.css';
import HeartLeaf from "../assets/11- animated_leaf.png";

gsap.registerPlugin(useGSAP);

function Hero() {
    const containerRef = useRef();


    useGSAP(() => {
        // --- Leaf 1 Animation ---
        gsap.to(".heart-leaf1", {
            rotation: 20,
            transformOrigin: "bottom center",
            duration: 1,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut"
        });

        // --- Leaf 2 Animation ---
        gsap.to(".heart-leaf2", {
            rotation: 10,       // 10 se 25 ki taraf jayega
            transformOrigin: "bottom center",
            duration: 1,
            delay: 0.2,         // Thora sa late start
            repeat: 5,          // Same 3 cycles logic
            yoyo: true,
            ease: "power1.inOut"
        });
    gsap.to(".Herrt-leaves", {
        rotation: 360,              // ghoomta rahe
        x: 70,                    // LEFT ki taraf move (~4 cm)
        y: -60,                     // thora upar (~1 cm)
        scale: 0.55,                // thora chhota hota jaye
        transformOrigin: "center center",
        duration: 6,
        ease: "power2.inOut"
        // ❌ repeat / yoyo nahi — ja kar ruk jayega
    });

    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <div className='hero-container'>
                <div className='small-animated-logo'>
                    <h1><i>Marée</i></h1>
                    <div className='Herrt-leaves'>
                        <img src={HeartLeaf} alt="" className='heart-leaf1' />
                        <img src={HeartLeaf} alt="" className='heart-leaf2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;