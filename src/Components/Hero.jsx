import '../Styling/Hero.css';
import HeartLeaf from "../assets/11- animated_leaf.png";

function Hero() {
    return (
        <>
            {console.log("hi")}

            <div className='hero-container'>
                <div className='small-animated-logo'>
                    <h1><i>Marée</i></h1>
                    <img src={HeartLeaf} alt="" className='heart-leaf1'/>
                    <img src={HeartLeaf} alt="" className='heart-leaf2'/>
                </div>
            </div>

        </>
    )
}

export default Hero;