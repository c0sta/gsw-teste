import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => (
    <div className="menu-button-box">
      <img src={props.src} alt="icon"/>
      <button >{props.name}</button>
    </div>
);

export default MenuButton;
