import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../Styling/Card.css';

// --- Importing All Assets ---
import Couple from "../assets/1-couple.png";
import Cloud from "../assets/2-cloud.png";
import RoundLeaf from "../assets/3-round_leaf.png";
import StrinkLeaf from "../assets/4-strink_leaf.png";
// import Logo from "../assets/5-logo.svg"; // Using Text "Marée" instead as per previous request
import Leaf6 from "../assets/6-leaf.png";
import CoupleLeaf from "../assets/7-couple_leaf.png";
import Bird from "../assets/8-bird.png";
import BigLeaf from "../assets/9-big_leaf.png";
import SmallLeaf from "../assets/10-small_leaf.png";
import AnimatedLeaf from "../assets/11- animated_leaf.png";

gsap.registerPlugin(useGSAP);

function Cards() {
    const containerRef = useRef();
    const [showHero, setShowHero] = useState(true);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Initial States (Hidden)
        gsap.set(".hero-elements img, h1", { opacity: 0, y: 20 });
        
        // 2. Entry Animation (Sequence)
        tl.to(".cloud-img", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" })
          .to(".bird-img", { opacity: 1, x: 0, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")
          .to(".couple-img", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")
          .to(".leaves-group img", { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "-=1");

        // 3. Continuous Floating Animations (Ambient Motion)
        gsap.to(".cloud-img", { x: 20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".bird-img", { y: -10, x: 10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        
        // Special Sway for Animated Leaves (Your previous request)
        gsap.to(".sway-leaf", {
            rotation: 15,
            transformOrigin: "bottom center",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 4. Marée Text Animation (10 Seconds Delay as requested before)
        gsap.to("h1", {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 9, // Starts appearing near the end
            ease: "power3.out"
        });

        // 5. Container Exit Animation (The "Spin & Go" effect)
        // This runs right before unmounting
        gsap.to(".hero-container", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            delay: 10.5, // Just before 11s
            ease: "power2.in"
        });

        // ⏱️ 11 sec Timer to Remove Component
        setTimeout(() => {
            setShowHero(false);
        }, 11000);

    }, { scope: containerRef });

    if (!showHero) return null;

    return (
        <div ref={containerRef} className="main-wrapper">
            <div className='hero-container'>
                
                {/* --- 1. Background Elements --- */}
                <img src={Cloud} alt="Cloud" className='hero-elements cloud-img' />
                <img src={Bird} alt="Bird" className='hero-elements bird-img' />

                {/* --- 2. Main Character --- */}
                <img src={Couple} alt="Couple" className='hero-elements couple-img' />

                {/* --- 3. Text (Marée) --- */}
                {/* Text starts hidden (opacity:0 in CSS/GSAP) and appears after delay */}
                <h1 className='main-logo-text'><i>Marée</i></h1>

                {/* --- 4. Foreground Leaves (Framing) --- */}
                <div className='leaves-group'>
                    <img src={BigLeaf} alt="Big Leaf" className='leaf-pos big-leaf' />
                    <img src={RoundLeaf} alt="Round Leaf" className='leaf-pos round-leaf' />
                    <img src={StrinkLeaf} alt="Shrink Leaf" className='leaf-pos shrink-leaf' />
                    <img src={SmallLeaf} alt="Small Leaf" className='leaf-pos small-leaf' />
                    <img src={CoupleLeaf} alt="Couple Leaf" className='leaf-pos couple-leaf' />
                    <img src={Leaf6} alt="Leaf 6" className='leaf-pos leaf-6' />
                    
                    {/* The Animated Leaves from previous turn */}
                    <img src={AnimatedLeaf} alt="Animated 1" className='leaf-pos sway-leaf leaf-ani-1' />
                    <img src={AnimatedLeaf} alt="Animated 2" className='leaf-pos sway-leaf leaf-ani-2' />
                </div>

            </div>
        </div>
    )
}

export default Cards;