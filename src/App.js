import "./scss/App.css";
import Hero from "./components/Hero";
import Services from './components/Services'
import Products from './components/Products'
import Team from './components/Team'
import Skills from './components/Skills'
import Video from './components/Video'
import WhoWeAre from './components/WhoWeAre'
import SpecialOffer from './components/SpecialOffer'
import Reviews from './components/Reviews'
import React, { Component} from "react";

import Contact from './components/Contact'
import Footer from './components/Footer'

export default class App extends Component {
 
 render(){
  return (
    <div className="App">
       
 
     
      < Hero />
      <Services  />
      <Products/>
      <Team />
      <Skills />
      <Video/>
      <WhoWeAre />
      <SpecialOffer />
      <Reviews />
      <Contact/>
      <Footer/>
     
    </div>
  );
 }
}



