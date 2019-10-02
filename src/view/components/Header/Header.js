import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * IMPORTING ASSETS
 */
import logo from '../../assets/dashboard/logo-dashboard.png';
import lupa from '../../assets/dashboard/lupa.png';
import settings from '../../assets/dashboard/settings.png';
import resize from '../../assets/dashboard/resize.png';
import sandwich from '../../assets/dashboard/sandwich.png';
import project from '../../assets/dashboard/add-project.png';
import user from '../../assets/dashboard/add-user.png';
import client from '../../assets/dashboard/add-client.png';
import './Header.css';

export default class Header extends Component{

    render(){
    
        return(
            <header className="header-box">
    
                <div className="header-logo">
                    <Link to="/">
                    
                        <img src={logo} alt="logo" />
                    
                    </Link>

                    <button className="header-sandwich">
                    
                        <img src={sandwich} alt="sandwich menu"></img>
                    
                    </button>
                </div>
    
                <div className="header-search">
                    <input type="search" autoComplete placeholder="Buscar..."/>
                    <img src={lupa} alt="lupa icon"/>
                </div>
                
                
                <div className="header-buttons">
    
                    <div  className="button-box">
                            <img src={project} alt="create project"></img>
                            <button className="button" onClick={this.props.handleProject}>
                                Criar Projeto
                            </button>
                    </div>
                    
                    <div  className="button-box">
                            <img src={user} alt="create user"></img>
                            <button className="button" onClick={this.props.handleUser}>
                                Cadastrar Usuário
                            </button>
                    </div>
                    
                    <div  className="button-box">
                        <img src={client} alt="create client"></img>
                        <button className="button" onClick={this.props.handleClient}>
                            Cadastrar Cliente
                        </button>
                        
                    </div>           
                </div>
    
                <div className="header-extra-buttons">
                    <button className="button">
                        <img src={settings} alt="settings icon"></img>
                    </button>
                    <button className="button">
                        <img src={resize} alt="resize icon"></img>
                    </button>
                </div>
            </header>
        );
    }
}