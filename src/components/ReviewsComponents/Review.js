import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Review({sr, title, paragraph}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (

<>
    <img data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" src={sr} alt='review'/>
  <h3 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{title}</h3>
  <p data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{paragraph}</p>

</>


  );
}

export default Review;
