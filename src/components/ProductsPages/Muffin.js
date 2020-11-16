import React,{Component} from "react";
import Product from './Product'

import image1 from './products/9.jpg'
import image2 from './products/10.jpg'
import image3 from './products/11.jpg'
import image4 from './products/12.jpg'

import image5 from './products/13.jpg'
import image6 from './products/14.jpg'
import image7 from './products/15.jpg'
import image8 from './products/16.jpg'

export default class Muffin extends Component {
    state = {
        isfirst:1,
        issecond:0,
      }
      handleFirst= () => this.setState({ 
        isfirst: true, issecond:false
        
      });
      handleSecond= () => this.setState({  issecond:true,isfirst:false });

render(){
    return(
        <>
         <div className={this.state.isfirst ? 'products-holder active ': 'products-holder' }>
      
      
         <Product title='Blue Cupcake' price={23.35} image={image1}/>
      <Product title='Cherry Cake' price={35.99} image={image2}/>
      <Product title='Sweet Cake' price={17.20} image={image3}/>
      <Product title='Delicious Cup' price={22.99} image={image4}/>
      </div>
      <div className={this.state.issecond ? ' products-holder active ': 'products-holder' }>
     
      <Product title='Rose Taste' price={19.05} image={image5}/>
      <Product title="Summer Mood" price={55.99} image={image6}/>
      <Product title='Unicorn Cake' price={17.22} image={image7}/>
      <Product title='Smile Cake' price={10.99} image={image8}/>
      </div>
      
      <div className='button-holder'>
      <div className={this.state.isfirst ? 'button active ': 'button' } onClick={this.handleFirst}>1</div>
      <div className={this.state.issecond ? 'button active ': 'button' } onClick={this.handleSecond} >2</div>
      </div>
        </>
    )
    }

}