import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function TeamBox({title,paragraph,src}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
<div   className="team-box">
  <img data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" src={src} alt='team'/>

  <h3 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{title}</h3>
  <p data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">{paragraph}</p>
</div>
  );
}

export default TeamBox;