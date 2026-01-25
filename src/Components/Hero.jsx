import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../Styling/Hero.css';
import HeartLeaf from "../assets/11- animated_leaf.png";

gsap.registerPlugin(useGSAP);

function Hero() {
    const containerRef = useRef();
    const [showHero, setShowHero] = useState(true);

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
            rotation: 10,
            transformOrigin: "bottom center",
            duration: 1,
            delay: 0.2,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut"
        });

        // --- Container/Group Animation ---
        gsap.to(".Herrt-leaves", {
            rotation: 360,
            x: 70,
            y: -60,
            scale: 0.55,
            duration: 6,
            ease: "power2.inOut"
        });

        // ⏱️ 11 sec baad State False kardo
        setTimeout(() => {
            setShowHero(false);
        }, 11000);

    }, { scope: containerRef }); // Scope add kiya taake animation safe rahe

    // --- MAIN FIX IS HERE ---
    // Agar showHero FALSE hai, to wapis jao, kuch render mat karo
    if (!showHero) return null; 

    return (
        <div ref={containerRef}>
            <div className='hero-container'>
                <div className='small-animated-logo'>
                    
                    {/* Text Animation: 10 sec baad aayega (setTimeout use karke) */}
                    {setTimeout(() => {
                         const h1 = document.querySelector("h1");
                         if(h1) h1.style.opacity = "1";
                    }, 10000)}
                    
                    {/* H1 ko shuru mein CSS ya style se opacity: 0 rakhna behtar hai */}
                    <h1 style={{opacity: 0, transition: "opacity 1s"}}><i>Marée</i></h1>

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