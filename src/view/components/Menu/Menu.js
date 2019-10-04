import React from 'react';

import MenuButton from './MenuButton.jsx';
import MenuChildren from './MenuChildren.js';

import './Menu.css';
import dashboardIcon from "../../assets/menu/dashboard-icon.png";
import cadastrosIcon from "../../assets/menu/cadastros-icon.png";
import projetosIcon from "../../assets/menu/projetos-icon.png";
import perfilIcon from "../../assets/menu/perfil-icon.png";
import registroIcon from "../../assets/menu/registro-horas-icon.png";
import configuracoesIcon from "../../assets/menu/configuracoes-icon.png";
import sairIcon from "../../assets/menu/sair-icon.png";


export default function MenuBar(){

  const items =[
    {
      "name": "Dashboard",
      "src": dashboardIcon,
      "to": "#"
    },
    { 
      "name": "Cadastros",
      "src": cadastrosIcon,
      "children": [
        {
          "name": "Usuários"
        },
        {
          "name": "Clientes"
        }
      ]
    },
    {
      "name": "Projetos",
      "src": projetosIcon,
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
      "to": "#"
    },
    {
      "name": "Configurações",
      "src": configuracoesIcon,
      "to": "#"
    },
    
    
    {
      "name": "Sair do sistema",
      "src": sairIcon,
      "to": "#"
    },
  ]

    return (
      <div className="box-menu">
          {
            items.map( item => <MenuButton name={item.name} src={item.src} />)
          }
      </div>
    )
  }
