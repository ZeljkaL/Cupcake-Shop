import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Product({image, title, price}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
<div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="product-box">
    <img src={image} alt='product'/>
    <div className='product-info'>
        <h3>{title}</h3>
         <p>${price}</p>
     </div>
</div>
  );
}

export default Product;

