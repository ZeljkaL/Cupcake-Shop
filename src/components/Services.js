import React,{Component} from "react";
import Title from "./Title"
import ServiceBox from "./ServicesComponents/ServiceBox"
import hr from '../photos/png/hr.png'
import { GiFairyWand ,GiFoodTruck} from "react-icons/gi";
 
    import {  IoIosRibbon } from "react-icons/io";
      import {  BiFoodMenu  } from "react-icons/bi";

export default class Services extends Component {

render(){
  return (
    <div  id='services' className="services">
       <Title  title="Services" sr={hr}/>
       <div className='service-box-holder'>
         <div className='first'>        <ServiceBox icon = {<GiFairyWand/>}title="Tasty & delicious cakes" paragraph="Id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex. In eu quam enim."/>
 </div>
       <ServiceBox icon ={< GiFoodTruck/>}title="Free delivery" paragraph="Uisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex."/>
        <ServiceBox icon={< IoIosRibbon/>} title="Fresh & natural product" paragraph="Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat."/>
        <ServiceBox  icon={<BiFoodMenu />}title="Years of experience" paragraph="Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex. In eu quam enim."/>
       </div>
    </div>
      );
}
}


