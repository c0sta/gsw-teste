import React from 'react';

import './Card.css';
import exit from '../../assets/user-card/exit.png';
export default function Card(props){
    
  
    return(
        <div className={"card-box"} style={props.style}>
            <header className="card-header">
                <h1>{props.title}</h1>
                <button onClick={props.onClick}><img src={exit} alt="exit button"></img></button>
            </header>
            {props.children}
        </div>
    );

    
}