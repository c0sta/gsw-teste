import React from 'react';

import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import './style.css';






export default function Login(){

        return(
                <div className="App">
                    <div className="login-box">
                
                        <div className="login-header">
                            <img  className="header-img" src={logo} alt="Logo"/>
                            <h3   className="header-text">Acesse sua conta</h3>
                        </div>
                    
                        <div className="login-inputs">
                            <input className="input" type="username" placeholder="Digite seu login"></input>
                            <input className="input" type="password" placeholder="Digite sua senha"></input>
                        </div>
                        
                        <div className="login-footer">

                            <div className="checkBox">
                                <input type="checkbox"/>
                                <text> Manter conectado</text>
                            </div>

                            <div className="login-recover-pass">
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                        </div>
                       
                        <div className="login-button">
                            <Link to="/dashboard">
                                <button className="button">Acessar conta</button>
                            </Link>
                        </div>
                        
                    </div> 
                </div>
        );

    }
