import React, {useState} from 'react';
import alert from '../../assets/alert-card/alert.png';
import './Alert.css';

export default function Alert(props){

    const [isOpen, setOpen] = useState(false);

    return(
        <div className="alert-box">
            <div className="alert-content">     
                <img src={alert} alt="alert icon" />
                <h1 className="alert-title">Aviso!</h1>
                <p className="alert-text">Você tem certeza que deseja registrar essa quantidade de horas para este projeto?</p>
                <div className="alert-buttons">
                    <button 
                        className="button-cancelar"
                        onClick={() => setOpen(!isOpen)}
                    >Cancelar</button>
                    <button 
                        className="button-confirmar"
                        onClick={() => setOpen(!isOpen)}
                    >Confirmar!</button>
                </div>
            </div>
        </div>
    );
}