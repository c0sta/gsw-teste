import {React, Component} from 'react';



export default class SideBar extends Component{

    render(){
        return(
            <div className="menu-box">
                
                <div className="menu-perfil">
                    <div className="menu-img">
    
                    </div>
                    <div className="menu-name">
    
                    </div>
                </div>
    
                <div className="menu-buttons">
                    <button className="menu-dashboard">Dashboard</button>
                    <div className="menu-cadastros">
                        <button className="cadastro-usuario">Usuários</button>
                        <button className="cadastro-usuario">Usuários</button>
                    </div>
                    
                    
                    <button className="menu-dashboard"></button>
                </div>
    
            </div>
        );
    }

}