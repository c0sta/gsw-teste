import React from "react";
import Menu from '../Menu/Menu';


//ASSETS 
import perfil from '../../assets/dashboard/alan-turing.png';
import arrowDownDark from '../../assets/dashboard/arrow-down-dark.png';
import './SideBar.css';



 
export default function SidebarExample() {

    
  return (
  
 
      <div className="menu-box">

        <div className="menu-perfil">

            <img src={perfil} alt="foto de perfil" className="perfil-pic"></img>   

            <div className="perfil-name">
                <text className="admin">Dashboard Admin</text>
                <text className="name">José da Silva</text>
            </div> 
            <button className="icon">
            <img src={arrowDownDark} alt="icone arrow down" className="icon"></img>
            </button>
            
        </div>
        <div className="menu-lists">
            <Menu/>
        </div>
          
      </div>
    
  );
}


/**
 * 
 * const menu=[


        {
                icon: 'home',
                label: 'Dashboard',
                to: '/dashboard',
        }, 
        
        
        {
            icon: 'arrow',
            label: 'Cadastros',
            content: [

                {
                    icon: 'icon-class-name',
                    label: 'Usuários',
                    to: '#usuarios',
                },

                {
                    icon: 'icon-class-name',
                    label: 'Clientes',
                    to: '#clientes',
                },
            ],

        },
        {
            icon: 'icon-class-name',
            label: 'Projetos',
            content: [
                {
                    icon: 'icon-class-name',
                    label: 'Criar projeto',
                    to: '#criar-projeto',
                },
                {
                    icon: 'icon-class-name',
                    label: 'Relatórios',
                    to: '#relatorios',
                },
                {
                    icon: 'icon-class-name',
                    label: 'Registros',
                    to: '#registros',
                },
            ],
        },
        {
            icon: 'icon-class-name',
            label: 'Projetos',
            content: [
                {
                    icon: 'icon-class-name',
                    label: 'Trocar senha',
                    to: '#trocar-senha',
                },
                {
                    icon: 'icon-class-name',
                    label: 'Editar perfil',
                    to: '#editar-perfil',
                }
            ],
        },

        {
            icon: 'hom',
            label: 'Registro de horas',
            to: '#registro-horas',
        }, 
        {
            icon: 'home',
            label: 'Configurações',
            to: '#configurações',
        },
        {
            icon: 'home',
            label: 'Sair',
            to: '#sair',
        },  
    ];
 */