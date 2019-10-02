import React,{useState} from 'react';


/*ASSETS*/
import './ProjectCard.css';

/**
 * COMPONENTS
 */
import Select from '../Select/Select';
import Card from '../Card/Card';
import DatePicker from '../DatePicker/DatePicker';


import Time from '../Time/Time';

export default function ProjectCard(props){

    const [startDate, setStartDate] = useState(new Date());
    
    return(
         
            <Card title="Criar projeto" onClick={props.onClick} >
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
                            <Time />
                        </div>
                    
                        <div className="box-date">
                            <DatePicker 
                                selected={startDate} 
                                onChange={date => setStartDate(date)}
                                
                            />
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
                        <button onClick={props.onClickCreate}>Criar Projeto</button>
                    </div>
               </div>
                
                
            </Card>
    );
 
}
            