import React from 'react';


import Card from '../Card/Card.js';
import './ClientCard.css'
import Button from '../Button/Button.js';


export default function ClientCard(props){

    return(
        <Card title="Cadastrar cliente" onClick={props.onClick}>
           <div className="card-body">

                <div className="inputs">
                    
                    <input 
                        name="name" 
                        type="text"
                        placeholder="Informe o nome da empresa"
                    />
                    
                    <input 
                        name="cnpj" 
                        type="text"
                        placeholder="CNPJ"
                    />
                    
                    <input 
                        name="email" 
                        type="email"
                        placeholder="Digite seu e-mail (Será seu login de acesso)"

                    />
                </div>
           </div>
           <div className="box-button" onClick={props.onClickRegisterClient} >
                <Button text="Cadastrar cliente" />
           </div>
            

        </Card>

    );
}