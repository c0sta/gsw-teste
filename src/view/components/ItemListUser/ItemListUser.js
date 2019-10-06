import React,{useState} from 'react';
import clock from '../../assets/dashboard/clock.png';
import calendar from '../../assets/dashboard/calendar.png';

import iconT from '../../assets/dashboard/icon-t.png';
import './ItemListUser.css';

import arrowDown from '../../assets/dashboard/arrow-down-light.png';
import HoursCard from '../HoursCard/Hours';
export default function ItemListUser(props){
    
   
    const [isHoursOpen, setHoursOpen] = useState(false);


   return   (
            <div className="item-box" onClick={props.onClick}>
                        
                <div className="box-left">
                    <img src={iconT} alt="project icon" className="perfil-img"></img>
                    <div className="item-texts">
                        <div className="item-header">
                        <h1>{props.criadoPor}</h1>
                        <img src={arrowDown} alt="icon"/>
                        <text>{props.projeto}</text> 
                        </div>
                        <text>{props.descricao}</text>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img src={calendar} alt="clock icon"></img>
                            <text>Termina em {props.entrega}</text>
                        </div>
                    </div>
                </div>
                
                <div className="box-right">
                    <div className="hours-texts">
                        <div className="horas-dedicadas">
                            <img src={clock} alt="icon" className="clock-icon"/>
                            <text>8{props.horas_dedicadas}</text> 
                        </div>
                        <div className="horas-faltantes">
                            <img src={clock} alt="icon" className="clock-icon"/>
                            <text>10{props.horas_faltantes}</text>
                        </div>
                        <button className="add-hours" onClick={ () => setHoursOpen(!isHoursOpen)}>...</button> 
                            
                    </div>
                </div>
                {
                    isHoursOpen? <HoursCard onClick={ () => setHoursOpen(!isHoursOpen)} />:null
                }
            </div>
            );

    
}


