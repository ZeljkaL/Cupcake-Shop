import React, { Component } from "react";
import { FaEnvelope, FaGithub, FaTwitter,FaInstagram} from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
    
        <div className="footer">
            <div id="button"></div>

             <div id="container">
                 <div className='links'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#team">Team</a>
                    <a href="#products">Products</a>
                 </div>
                 <div className='vr-line'></div>

                 <div className='social-media-list'>
                     <li >
                         <a  href='#home'  target="_blank"><FaTwitter className='icon'/></a>
                    </li>
                    <li>  <a href='#home'  target="_blank" >  <FaEnvelope className='icon' /></a>
                    </li>
                    <li>  <a href='#home'  target="_blank" >  <FaInstagram className='icon'/></a> </li>
                     <li>  <a href='#home'  target="_blank" >      <FaGithub className='icon'/></a>   </li>
                  
               
               
                 </div>
             </div>
        
        </div>
    
    );
  }
}

/*
 <div className="footer">
        <div className="footer-inner"> 
         </div>
      </div>*/
