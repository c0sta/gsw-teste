import React,{useState} from 'react';

import './Hours.css';
import "react-datepicker/dist/react-datepicker.css";

import Card from '../Card/Card';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button';
import Alert from '../AlertCard/Alert';

export default function HoursCard(props){
    

    const [isAlertOpen, setAlertOpen] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
  
    return(
        
        <Card 
        title="Horas trabalhadas" 
        onClick={props.onClick}
        >
        
 
        
            <div className="hours-body">
                <div className="hours-header">
                    <h1><b>Projeto selecionado: </b>Projeto 1</h1>
                </div>
                <div className="datepicker-box">
                    <h1>Selecione a data</h1>
                    <DatePicker 
                        selected={startDate} 
                        onChange={date => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="timepicker-box">
                    <h1>Informe a quantidade de horas</h1>    
                    <DatePicker
                        selected={startDate}
                        onChange={time => setStartDate(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
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