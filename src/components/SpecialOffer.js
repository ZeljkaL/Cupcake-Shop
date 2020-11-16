import React,{Component} from "react";
import hr from '../photos/png/hr.png'
import Title from './Title'
import SpecialBox from './SpecialOfferComponents/SpecialBox'
import { GiCupcake,
  GiSpiralLollipop} from "react-icons/gi";
  import { FaBirthdayCake} from "react-icons/fa";
export default class SpecialOffer extends Component {

render(){
  return (
    <div  className="special">
     <Title title='Special Offer' sr={hr}/>
     <div className='special-offer-holder'>
         <SpecialBox icon={<GiCupcake/>} price='32.99' title='Box of cupcakes' paragraph='Distinctively aggregate standardized experiences before superior e-markets. Dynamically foster mission-critical best practices for dynamic niches. Uniquely.'/>
         <SpecialBox icon={<FaBirthdayCake/>} price='59.99' title='Birthday Cakes' paragraph='Distinctively aggregate standardized experiences before superior e-markets. Dynamically foster mission-critical best practices for dynamic niches. Uniquely.'/>
    
         <SpecialBox icon={<GiSpiralLollipop/>} price='26.99' title='Box of sweets' paragraph='Distinctively aggregate standardized experiences before superior e-markets. Dynamically foster mission-critical best practices for dynamic niches. Uniquely.'/>
    
      </div>
    </div>
      );
}
}

