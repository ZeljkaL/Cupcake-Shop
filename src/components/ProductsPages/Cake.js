import React,{Component} from "react";
import Product from './Product'


import image1 from './products/1.jpg'
import image2 from './products/2.jpg'
import image3 from './products/3.jpg'
import image4 from './products/4.jpg'

import image5 from './products/5.jpg'
import image6 from './products/6.jpg'
import image7 from './products/7.jpg'
import image8 from './products/8.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";


export default class Cake extends Component {
  
    state = {
        isfirst:1,
        issecond:0,
      }
      handleFirst= () => this.setState({ 
        isfirst: true, issecond:false
        
      });
      handleSecond= () => this.setState({  issecond:true,isfirst:false });
      componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
render(){
    return(
        <>
         <div  className={this.state.isfirst ? 'products-holder active ': 'products-holder' }>
      <div className='first'> <Product  title='Summer Mood' price={23.35} image={image1}/>
 </div>
  <Product title='Berry assorty' price={35.99} image={image2}/>
   <Product title='Sweet Cake' price={17.20} image={image3}/>
     <Product title='Delicious Cup' price={22.99} image={image4}/>
    
   

      </div>
      <div className={this.state.issecond ? ' products-holder active ': 'products-holder' }>
     <div className='first'> <Product title='Sweet Taste' price={19.05} image={image5}/></div>
     
      <Product title='Pink Cake' price={55.99} image={image6}/>
      <Product title='Rainbow Love' price={17.22} image={image7}/>
      <Product title="Girl's Cake" price={10.99} image={image8}/>
      </div>
      
      <div className='button-holder'>
      <div className={this.state.isfirst ? 'button active ': 'button' } onClick={this.handleFirst}>1</div>
      <div className={this.state.issecond ? 'button active ': 'button' } onClick={this.handleSecond} >2</div>
      </div>
        </>
    )
    }

}