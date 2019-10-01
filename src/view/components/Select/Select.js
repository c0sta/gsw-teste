import React, { useState} from 'react';
import arrow from '../../assets/project-card/arrow-down.png';
import './Select.css';
import SelectContent from './SelectContent';




export default function Select(){
    

    const [isOpen, setOpen] = useState(false);

        return(
       
       <div className="select-box" >
            
            <div className="select-box-header" onClick={ () => setOpen(!isOpen)}>
                <h2>Selecione o cliente</h2>
                <img src={arrow} alt="arrow down"/>
            </div>
            
            {
                isOpen && (<SelectContent />
                )
            }
       
        </div>
    );
}
