import video from '../photos/video.mp4'
import React,{Component} from 'react'
import quote from '../photos/png/quote.png'
import AOS from 'aos';
import "aos/dist/aos.css";

export default class Video extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
 
render(){
  return (
    
    <div  className="video-holder">
    <video id='vid' src={video}  autoplay="autoplay" allowfullscreen='true' preload="true" muted></video>
    <div className='quote'  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
      <div className='quote-img'>
        <img src={quote} alt='video'/>
       <div className='text'  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
         <p>“The breakfast slimes, angel food cake, doughnuts and coffee, white bread and gravy cannot build an enduring nation”</p>
       <h3>~Martin H. Fischer</h3>
       </div>
      </div>
    
    </div>
    </div>
    
      );
}
 
}

