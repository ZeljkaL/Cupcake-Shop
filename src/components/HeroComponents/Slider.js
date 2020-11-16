import img1 from "./hero/1.jpg";
import img2 from "./hero/2.jpg";
import img3 from "./hero/3.jpg";


import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Slider() {
  return (
    <div className="slider">
      <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
      <div className=" box effect5 effect51">
        <img  src={img2} className="sliderimg" alt="" />
       
        </div>
        <div className=" box effect5 effect51">
        <img src={img3} className="sliderimg" alt="" />
        </div>
        <div className=" box effect5 effect51 ">
        <img src={img1} className="sliderimg" alt="" />
       </div>
      </AliceCarousel>
    </div>
  );
}

export default Slider;
/*
 */