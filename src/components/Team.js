import React,{Component} from "react";
import Title from './Title'
import TeamBox from './TeamComponents/TeamBox'
import img1 from '../photos/team/1.jpg'
import img2 from '../photos/team/2.jpg'
import img3 from '../photos/team/3.jpg'
import img4 from '../photos/team/4.jpg'
import hr from '../photos/png/hr-white.png'

export default class Team extends Component {

 render(){
  return (
    <div id='team' className="team">
            <div className='white'><Title title='Our chief team' sr={hr}/>
            <div className='team-box-holder'>
              <div className='first'>               <TeamBox src={img1}title='John Doe' paragraph='Fusce ut elit nec enim interdum viverra. Praesent interdum sollicitudin dolor sed tempus.'/>
 </div>
              <TeamBox src={img2}title='Mark Doe' paragraph='Fusce ut elit nec enim interdum viverra. Praesent interdum sollicitudin dolor sed tempus elit nec enim interdum viverra.'/>
               <TeamBox src={img3}title='Jessica Doe' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis rhoncus fringilla.'/>
               <TeamBox src={img4}title='Johnny Doe' paragraph='Mauris sapien odio, rhoncus ut ex id, fermentum rutrum metus. Phasellus non magna consequat.'/>
            </div></div>
            
          
          
       
      
    </div>
  );
 }
}

