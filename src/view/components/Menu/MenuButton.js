import React from 'react';
import './MenuButton.css';
import {Link} from 'react-router-dom';


const MenuButton = (props) => (
    <Link to={props.to} className="menu-box">
      <div className="menu-button-box">
        <img src={props.src} alt="icon"/>
        <button >{props.name}</button>

      </div>
      
      <div className="menu-child-box">
        {props.children}  
      </div>
      
    </Link>
);

export default MenuButton;
