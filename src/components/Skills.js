import React, { Component } from "react";
import Title from "./Title";
import Progress from "./SkillsComponents/Progress";
import hr from "../photos/png/hr.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default class Skills extends Component {
  state = {
    i: 0,
  };
  handleBar = () =>
    this.setState({
      i: true,
    });

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }

  render() {
    return (
      <div onPointerOver={this.handleBar} className="skills">
        <Title title="Skills" sr={hr} />
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="skills-holder"
        >
          <div className="pr-box first">
            {" "}
            <Progress i={this.state.i} done="70" />
            <p>Returning customers</p>
          </div>
          <div className="pr-box ">
            {" "}
            <Progress i={this.state.i} done="60" />
            <p>Winning contests</p>
          </div>
          <div className="pr-box t">
            {" "}
            <Progress i={this.state.i} done="85" />
            <p>Unique items</p>
          </div>
          <div className="pr-box ">
            {" "}
            <Progress i={this.state.i} done="90" />
            <p>Using own products</p>
          </div>
        </div>
      </div>
    );
  }
}
