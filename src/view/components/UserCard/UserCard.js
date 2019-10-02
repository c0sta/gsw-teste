import React from 'react';


import Card from '../Card/Card.js';
import './UserCard.css'
import Button from '../Button/Button.js';


export default function UserCard(props){

    return(
        <Card title="Cadastrar usuários" onClick={props.onClick}>
           <div className="card-body">

                <div className="inputs">
                    
                    <input 
                        name="name" 
                        type="text"
                        placeholder="Informe seu nome de usuário"
                    />
                    
                    <input 
                        name="cpf" 
                        type="text"
                        placeholder="CPF"
                    />
                    
                    <input 
                        name="email" 
                        type="email"
                        placeholder="Digite seu e-mail (Será seu login de acesso)"

                    />
                </div>

                <div className="card-permission">
                    <text><b>Permissão</b></text>

                    <input type="checkbox"/>
                    <text>Administrador</text>
                    
                    <input type="checkbox"/>
                    <text>Usuário</text>
                
                </div>
           </div>
           <div className="box-button" onClick={props.onClickRegisterUser} >
                <Button text="Cadastrar usuário" />
           </div>
            

        </Card>

    );
}