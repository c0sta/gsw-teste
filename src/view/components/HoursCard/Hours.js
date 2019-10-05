import React,{useState} from 'react';

import './Hours.css';

import Card from '../Card/Card';
import DatePicker from '../DatePicker/DatePicker';
import Time from '../Time/Time';
import Button from '../Button/Button';
import Alert from '../AlertCard/Alert';

export default function Hours(props){
    

    const [isAlertOpen, setAlertOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
  
    return(
        
        <Card 
        title="Horas trabalhadas" 
        onClick={props.onClick}
        >
        
 
        
            <div className="hours-body">
                <div className="hours-header">
                    <h1><b>Projeto selecionado: </b>Projeto Tanby</h1>
                </div>
                <div className="datepicker-box">
                    <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>
                <div className="timepicker-box">
                    <Time />
                </div>
                <div className="box-button" onClick={ () => setAlertOpen(true)}>
                    <Button text="Cadastrar horas" />
                </div>
                
                {
                    isAlertOpen? 
                    <Alert 
                    onClickCancel={() => setAlertOpen(!isAlertOpen)}  
                    onClickConfirm={() => setAlertOpen(!isAlertOpen)}
                    /> 
                    : null
                }
            </div>
        </Card>
    );
}