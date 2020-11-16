import React,{Component} from "react";
import hr from '../photos/png/hr.png'
import logo from '../photos/png/who.png'
import Title from './Title'

import AOS from 'aos';
import "aos/dist/aos.css";
export default class WhoWeAre extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
render(){
  return (
    <div id='about' className="who-we-are">
     <Title title='Who We Are' sr={hr}/>
     <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='about'>
       <div   className='dashed'>
         <img  src={logo} alt='logo'/>
         <p >Generate fully tested customer service and interoperable innovation. Rapidiously scale client-centric leadership via premium methods of empowerment. Competently fabricate sticky e-markets before strategic processes. Seamlessly repurpose premier collaboration and idea-sharing for innovative infomediaries. Rapidiously scale client-centric leadership via premium methods of empowerment.</p>
         </div>
    </div>
    </div>
      );
}
}


