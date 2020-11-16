import React from "react";
import Navbar from "./HeroComponents/Navbar";
import Slider from "./HeroComponents/Slider";
import logo from '../photos/png/logo.png'
function Hero() {
  return (
    <div  id='home' className='hero-image'>
    <div className="hero">
      <img className='logo' src={logo} alt='logo'/>
      <Navbar />
      <Slider />
    </div>
    </div>
  );
}

export default Hero;
