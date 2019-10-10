import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import SlidingLogin from "./SlidingLogin.js";
import Title from "/Users/justinandhang/Desktop/menu/menu2/src/Title.js";
import try1 from "/Users/justinandhang/Desktop/menu/menu2/src/photo/try.gif"
import lofi from "/Users/justinandhang/Desktop/menu/menu2/src/photo/turntable_vignette.gif"
import lo from "/Users/justinandhang/Desktop/menu/menu2/src/photo/lo.png"
import kafka from "/Users/justinandhang/Desktop/menu/menu2/src/photo/kafka_2.gif"
import dog from "/Users/justinandhang/Desktop/menu/menu2/src/photo/the_fluffy_ones_3.gif"

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
    this.clockImage();
  }

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      // The click is inside, continue to do whatever
      return;
    }

    // The click is outside, close the fucker
    this.closeOutside()
    console.log('clicked twice')
    e.stopPropagation()
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    /*e.stopPropagation();*/
  }

  closeOutside(e) {
    this.setState(
      {
        visible: false
      }
    )
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  
  clockImage() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
      document.body.style.backgroundImage = `url("${lofi}")`
      
    }
    else if (hours >= 12 && hours < 17) {
      document.body.style.backgroundImage = `url("${lo}")`
    }else if (hours >= 17 && hours < 21) {
      document.body.style.backgroundImage = `url("${dog}")`
    }
    else {
      document.body.style.backgroundImage = `url("${try1}")`
    }   
  }


  render() {
    return (
      <div ref = {node => this.node = node}>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible}/>
        <div>
          <Title />
          <SlidingLogin />
        </div>
      </div>
    );
  }
}

export default MenuContainer;