import React,{useEffect} from "react";
import wreath from './wreath.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function ServiceBox({title,paragraph,icon}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
<div  className="service-box">
  <img data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  src={wreath} alt='wreath'/>
  <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  className='icon'>{icon}</div>
  <h3 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >{title}</h3>
  <p  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{paragraph}</p>
</div>
  );
}

export default ServiceBox;