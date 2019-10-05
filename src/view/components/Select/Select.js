import React, { useState, useEffect} from 'react';
import arrow from '../../assets/project-card/arrow-down.png';
import './Select.css';
import api from '../../../services/api.js';



export default function Select(){
    

    const [isOpen, setOpen] = useState(false);
    const [clientes, setClientes] = useState([]);
    
    useEffect( () => {

        async function loadData(){
            const res = await api.get('/clientes')
            setClientes(res.data);
        }
        loadData();
    
    }, []);

    return(
       
       <div className="select-box" >
            
            <div className="select-box-header" onClick={ () => setOpen(!isOpen)}>
                <h2>Selecione o cliente</h2>
                <img src={arrow} alt="arrow down"/>
            </div>
            <div className="select-box-body">
            {
                isOpen && (
                    <div className="colapsible">
                            <div className="item-input">
                                <input type="search" placeholder="Nome do cliente"/>
                            </div>
                            <div className="item-list">
                                {clientes.length > 0 ? (
                                    <ul>
                                        {clientes.map(
                                            cliente => (
                                                <li>
                                                    {cliente.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                ): <h1>Cliente não encontrado</h1> }
                            </div>       
                    </div>
                )
            }{
                isOpen && (
                    <div className="colapsible">
                            <div className="item-input">
                                <input type="search" placeholder="Nome do cliente"/>
                            </div>
                            <div className="item-list">
                                {clientes.length > 0 ? (
                                    <ul>
                                        {clientes.map(
                                            cliente => (
                                                <li>
                                                    {cliente.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                ): <h1>Cliente não encontrado</h1> }
                            </div>       
                    </div>
                )
            }
            </div>
            
       
        </div>
    );
}
