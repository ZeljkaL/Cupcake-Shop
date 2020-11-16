import React,{Component} from "react";
import {Link} from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";
export default class Nav extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });

  }
    state = {
        isfirst:1,
        issecond:0,
        isthird:0,
      }
      handleFirst= () => this.setState({ 
        isfirst: true, issecond:false, isthird:false
        
      });
      handleSecond= () => this.setState({  issecond:true,isfirst:false,isthird:false });
      handleThird= () => this.setState({  issecond:false,isfirst:false,isthird:true });
    render(){
        return(
<nav data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  className='products-nav'>


    <div className='links'>
    <Link className={this.state.isfirst? 'link-active': ""} onClick={this.handleFirst} to="/">  Cakes  </Link>
    <Link  className={this.state.issecond? 'link-active': ""}  onClick={this.handleSecond} to="/muffin">  Muffins  </Link>
    <Link  className={this.state.isthird? 'link-active': ""} onClick={this.handleThird} to="/sweet">  Sweets  </Link>
      
      </div>
    
    </nav>
        )
    }
}

//<Route path="/muffin" component={Muffin}>Muffin</Route>