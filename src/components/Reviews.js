import React, {Component} from "react";
import Review from './ReviewsComponents/Review'
import sr1 from '../photos/review/1.jpg'
import sr2 from '../photos/review/2.jpg'
import sr3 from '../photos/review/3.jpg'
import { VscCircleFilled} from "react-icons/vsc";
import AOS from 'aos';
import "aos/dist/aos.css";

export default class Reviews extends Component  {
  state = {
    isfirst:1,
    issecond:0,
    isThird:0,
  }
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
  handleFirst= () => this.setState({ isfirst: true, issecond:false,isThird:false });
  handleSecond= () => this.setState({  issecond:true,isfirst:false,isThird:false });
  handleThird= () => this.setState({  issecond:false,isfirst:false,isThird:true });
  render(){
    return (
       <div  className="reviews">

         <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="outer-div">

          <div class="inner-border-div">

            <div className={this.state.isfirst? 'review active-rev ' : 'review'} >
              <Review  sr={sr1} title='John Doe' paragraph='Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex. In eu quam enim. Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet.'/>
            </div>

            <div className={this.state.issecond? 'review active-rev ' : 'review'}>
              <Review  sr={sr2} title='Elena Morell' paragraph='Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex. In eu quam enim. Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet.'/>
            </div>

            <div className={this.state.isThird? 'review active-rev ' : 'review'}>
              <Review  sr={sr3} title='Albert James' paragraph='Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet. Nam eget placerat ex. In eu quam enim. Quisque consectetur lacus id nibh congue, a fringilla felis imperdiet.'/>
             </div>

             <div className='dots' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
               <p><VscCircleFilled className={this.state.isfirst? 'active ' : ''} onPointerOver={this.handleFirst}/><VscCircleFilled className={this.state.issecond? 'active ' : ''}  onPointerOver={this.handleSecond}/><VscCircleFilled className={this.state.isThird? 'active ' : ''}  onPointerOver={this.handleThird}/></p>
            </div>

 
          </div>
        </div>
      </div>
        );
  }

}


