import React from 'react';

import MenuButton from './MenuButton.js';

import './Menu.css';
import dashboardIcon from "../../assets/menu/dashboard-icon.png";
import cadastrosIcon from "../../assets/menu/cadastros-icon.png";
import projetosIcon from "../../assets/menu/projetos-icon.png";
import perfilIcon from "../../assets/menu/perfil-icon.png";
import registroIcon from "../../assets/menu/registro-horas-icon.png";
import configuracoesIcon from "../../assets/menu/configuracoes-icon.png";
import sairIcon from "../../assets/menu/sair-icon.png";
import first from '../../assets/menu/first.png';




export default function MenuBar(props){

  const items =[
    {
      "name": "Dashboard",
      "src": dashboardIcon,
      "to": "#"
    },
    { 
      "name": "Cadastros",
      "src": cadastrosIcon,
      "to": "/dashboard",
      "children": [
        {
          "name": "Usuários",
        },
        {
          "name": "Clientes"
        }
      ]
    },
    {
      "name": "Projetos",
      "src": projetosIcon,
      "to": "/dashboard",
      "children": [
        {
          "name": "Criar projetos"
        },
        {
          "name": "Relatórios"
        },
        {
          "name": "Registros"
        }
      ]
    },
    {
      "name": "Meu Perfil",
      "src": perfilIcon,
      "to": "#",
      "children": [
        {
          "name": "Trocar senha"
        },
        {
          "name": "Editar perfil"
        }
      ]
    },
    {
      "name": "Ver registro de horas",
      "src": registroIcon,
      "to": "/dashboard"
    },
    {
      "name": "Configurações",
      "src": configuracoesIcon,
      "to": "#"
    },
    
    
    {
      "name": "Sair do sistema",
      "src": sairIcon,
      "to": "/"
    },
  ]

    return (
      <div className="box-menu">
          {
            items.map( item => (
            <MenuButton name={item.name} src={item.src} to={item.to}>
              
              {
                item.children? item.children.map( children => (
               
               <div className="box-item-children">
                 
                 <div className="child-column">
                   
                    <img src={first} alt="column icon" className="child-column-icon"/>
                  </div>

                  <div className="child-buttons">
                    <button className="item-children-button">{children.name}</button>
                  </div>
                  
                </div>

                )):null
                }
            
            </MenuButton>  
              ))
          }
      </div>
    )
  }
