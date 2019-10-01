import React from'react';

import lupa from '../../assets/dashboard/lupa.png';
import './SelectContent.css';

export default function SelectContent(){
    return(
        <div className="select-box-colapsed" >
                            
            <div className="select-search">
                <img src={lupa} alt="lupa"></img>
                <input type="search"></input>
            </div>
            
            <div className="select-users">
                <ul>
                    <li>
                        José Padaria
                    </li>
                    <li>
                        Joao que faz pão
                    </li>
                </ul>
            </div>
            
            <div className="select-button">
                <button className="select-add-client-button">+ Adicionar Cliente</button>
            </div>

        </div>
    )
}