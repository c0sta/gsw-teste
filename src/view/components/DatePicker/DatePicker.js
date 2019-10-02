import React from 'react';

import DatePicker from 'react-datepicker';
import './DatePicker.css';
export default function DatePickerCustom(props){
    
    const ExampleCustomInput = ({ value, onClick }) => (
      <button className="datepicker" onClick={onClick}>
        {value}
      </button>
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