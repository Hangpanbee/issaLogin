import React, { Component } from "react";
import "./Menu.css";
import messnoti from "/Users/justinandhang/Desktop/menu/menu2/src/photo/Messnoti.png";
import setting from "/Users/justinandhang/Desktop/menu/menu2/src/photo/setting.png";
import wishlist from "/Users/justinandhang/Desktop/menu/menu2/src/photo/Wishlist.png";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <div className = 'boxofelements'>
        <h2><a href="https://imgur.com/fI1PHSn"><img src = {messnoti} alt = 'Home' /></a></h2>
        <h2><a href="https://i.imgur.com/HH507ow.jpg"><img src = {setting} alt = 'Setting' /></a></h2>
        <h2><a href="https://i.imgur.com/xTgfUsZ.jpg"><img src = {wishlist} alt = 'wishlist' /></a></h2>
        </div>
      </div>
    );
  }
}

export default Menu;