import React from 'react';


/*ASSETS*/
import './ProjectCard.css';

/**
 * COMPONENTS
 */
import Select from '../Select/Select';

import Card from '../Card/Card';
import Button from '../Button/Button';


export default function ProjectCard(){

    return(
         
            <Card title="Criar projeto">
               <div className="box-body">
               <div className="box-inputs">
                    <input className="project-input" type="text" placeholder="Nome do projeto"/>           
                    <Select />
                </div>
                
                <div className="box-text-checkbox">
                    <text><b>Projeto privado?</b></text>
                    <input type="checkbox"/>
                    <text>Sim</text>
                    <input type="checkbox"/>
                    <text>Não</text>
                </div>

                <div className="box-date-time">
                
                    <div className="box-time">
                        <input type="time" />
                    </div>
                
                    <div className="box-date">
                        <input type="date" />
                    </div>   
                
                </div>
                
                <div className="box-users">
                    <h1>Adicionar usuários</h1>
                    <div className="box-list">
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <text> Adam Henrique</text>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <text> Antonio Nunes</text>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <text> José Severino</text>
                            </li>

                        </ul>
                    </div>
                    
                </div>

                <div className="box-button">
                    <Button text="Criar Projeto" />
                </div>
               </div>
                
                
            </Card>
    );
 
}
            