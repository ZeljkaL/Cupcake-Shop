import React,{Component} from "react";
//import 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import Nav from './ProductsPages/Nav'
import Title from './Title'
import Muffin from './ProductsPages/Muffin'
import Cake from './ProductsPages/Cake'
import Sweet from './ProductsPages/Sweet'
import hr from '../photos/png/hr.png'

import AOS from 'aos';
import "aos/dist/aos.css";

export default class Products extends Component {
  state = {
    isfirst:1,
    issecond:0,
  }
  handleFirst= () => this.setState({ isfirst: true, issecond:false });
  handleSecond= () => this.setState({  issecond:true,isfirst:false });
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }

  render(){
    return (
      <div  id='products' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="products">
        <Title title='Our delicious products' sr={hr}/>
       <Nav/>     
       <Switch>
       <Route exact path="/" component={Cake}/>
       <Route exact path="/muffin" component={Muffin}/>
       <Route exact path="/sweet" component={Sweet}/>
       </Switch>
          
      </div>
        );
  }


}



