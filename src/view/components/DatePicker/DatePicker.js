import React from 'react';

import DatePicker from 'react-datepicker';
import './DatePicker.css';
import "react-datepicker/dist/react-datepicker.css";


export default function DatePickerCustom(props){
    
    const ExampleCustomInput = ({ value, onClick }) => (
      <div className="datepicker" onClick={onClick}>
        <h1>Selecione a data</h1>
        <button className="datepicker-button" onClick={onClick}>
          {value}
        </button>
      </div>
    );

    return (
      <DatePicker
        selected={props.selected}
        onChange={props.onChange}
        dateFormat="dd/MM/yyyy"
        customInput={<ExampleCustomInput />}
      />
    );
}