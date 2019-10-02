import React from 'react';
import './Time.css';
export default function Time(){
    return(
        <div className="time-box">
        
            <h1 className="time-header">Tempo total</h1>

            <div className="time">
                <input type="number" placeholder="0:00" />
            </div>
        
        </div>
    );
}