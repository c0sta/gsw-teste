import React from 'react';
import './MenuButton.css';


const MenuButton = (props) => (
    <div className="menu-box">
      <div className="menu-button-box">
        <img src={props.src} alt="icon"/>
        <button >{props.name}</button>

      </div>
      
      <div className="menu-child-box">
        {props.children}  
      </div>
      
    </div>
);

export default MenuButton;
