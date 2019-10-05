import React,{useState, useEffect} from 'react';
import iconT from '../../assets/dashboard/icon-t.png';
import './ItemList.css';



export default function ItemList(props){
    
   


   return   (
            <div className="item-box" onClick={props.onClick}>
                        
                <div className="box-left">
                    <img src={iconT} alt="project icon"></img>
                    <div className="item-texts">
                        <h1>{props.criadoPor}</h1>
                        <text>{props.projeto}</text> 
                        <text>Termina em {props.entrega}</text>
                    </div>
                </div>
                
                <div className="box-right">
                    <div className="hours-texts">
                        <text>{props.horas_dedicadas}</text> 
                        <text>{props.horas_faltantes}</text>
                    </div>
                </div>

            </div>
            );

    
}


