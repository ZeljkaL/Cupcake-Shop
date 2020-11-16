import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Title({title,sr}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
<div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="title">
  <h1>{title}</h1>
  <img src={sr} alt='title'/>
</div>
  );
}

export default Title;


//<div className="hr-line"></div>