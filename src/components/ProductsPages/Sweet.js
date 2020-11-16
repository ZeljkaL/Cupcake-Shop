import React,{Component} from "react";
import Product from './Product'
import image1 from './products/17.jpg'
import image2 from './products/18.jpg'
import image3 from './products/19.jpg'
import image4 from './products/20.jpg'

import image5 from './products/21.jpg'
import image6 from './products/22.jpg'
import image7 from './products/23.jpg'
import image8 from './products/24.jpg'

export default class Sweet extends Component {
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
      
     
         <Product title='Delicious Cup' price={23.35} image={image1}/>
      <Product title='Rainbow' price={35.99} image={image2}/>
      <Product title='Strawberry' price={17.20} image={image3}/>
      <Product title='Summer Mood' price={22.99} image={image4}/>
      </div>
      <div className={this.state.issecond ? ' products-holder active ': 'products-holder' }>
     
       
      <Product title='All Yellow' price={19.05} image={image5}/>
      <Product title='Flower Cake' price={55.99} image={image6}/>
      <Product title='Unicorn Cake' price={17.22} image={image7}/>
      <Product title='Roses Taste' price={10.99} image={image8}/>
      </div>
      
      <div className='button-holder'>
      <div className={this.state.isfirst ? 'button active ': 'button' } onClick={this.handleFirst}>1</div>
      <div className={this.state.issecond ? 'button active ': 'button' } onClick={this.handleSecond} >2</div>
      </div>
        </>
    )
    }

}