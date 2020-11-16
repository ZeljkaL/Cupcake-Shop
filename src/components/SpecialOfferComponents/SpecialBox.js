import React,{useEffect} from "react";

import AOS from 'aos';
import "aos/dist/aos.css";

function SpecialBox({title,paragraph,icon,price}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
   
<div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="special-box">
  <div className='dashed'  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
  <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='icon'>{icon}</div>
  <h3 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{title}</h3>
  <p data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{paragraph}</p>
  <h4 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{price}$</h4>
  </div>
</div>
  );
}

export default SpecialBox;