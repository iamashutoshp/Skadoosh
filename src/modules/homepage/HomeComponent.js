import React, { Component } from "react";
import DrawerComponent from "../drawer/DrawerComponent";
import "./homeComp.css";
import img from "../../images/home2.jpg";
import imgpng from "../../images/home2.png";

const image = window.innerWidth >= 768 ? img : imgpng;
const background = {
  backgroundImage: `url("${image}")`,
  height: "100vh",
  width: "auto",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed",
};
export class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div style={background}>
        <DrawerComponent />
      </div>
    );
  }
}

export default HomeComponent;
