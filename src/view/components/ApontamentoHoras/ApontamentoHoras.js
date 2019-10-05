import React from 'react';
import './ApontamentoHoras.css';
import calendar from '../../assets/dashboard/calendar.png';
// import { Container } from './styles';
const days = ["D", "S","T","Q","Q","S","S"];

const ApontamentoHoras = () => (
        <div className="box-dias">
            <div className="box-header">
                <h1>Apontamento de Horas</h1>
                <div style={{display: "flex", flexDirection: "row", margin:"3px"}}>
                    <img src={calendar}/> 
                    <h3>03 a 07 julho</h3>   
                </div>     
            </div>
            
            
            <div className="days-row">
                {days.map(
                    day => (
                    <div className="days" >
                        <text className="text-day">{day}</text>
                        <text className="text-hour">0h</text>
                    </div>
                    )
                )}    
            </div>
            
        </div>


    );

export default ApontamentoHoras;
