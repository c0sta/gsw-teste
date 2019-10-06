import React, {useState} from 'react';

//COMPONENTS
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserCard from '../../components/UserCard/UserCard';
import ClientCard from '../../components/ClientCard/ClientCard';
import ProjectList from '../../components/ProjectList/ProjectList';
import SideBar from '../../components/SideBar/SideBar';
//ASSETS
import './Dashboard.css';

export default function Dashboard(){

    const [isProjectOpen, setProjectOpen] =  useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const [isClientOpen, setClientOpen] = useState(false);
   
    return(
        <div className="dashboard-box">
            <Header 
                  
                   handleProject={ ()=> setProjectOpen(!isProjectOpen) } 
                   handleUser={ () => setUserOpen(!isUserOpen)}
                   handleClient={ () => setClientOpen(!isClientOpen)}
            />
                
            <div className="dashboard-body">


               <div className="menu-container">
                    <SideBar />
               </div>


               <div className="dash-container">
                   
                    <header className="dash-header-container">
                        <text>Home / Dashboard</text>
                    </header>
                    
                    <body className="dash-body-container">
                        <ProjectList />
                    
                    </body>

                    <footer className="footer">
                         <h1> Desenvolvido com muito ☕</h1>
                         <div className="footer-buttons">
                            <button>Dashboard</button>
                            <button>Alterar plano</button>
                            <button>Ajuda & Suporte</button>
                        </div>
                    </footer>
               </div>
                
            </div>

            
            {
                isProjectOpen && 
                <ProjectCard 
                    className="center" 
                    onClick={ () => setProjectOpen(!isProjectOpen) }
                    onClickCreate={ () => setProjectOpen(!isProjectOpen) }
                />
            }
            
            
            {
                isUserOpen && 
                <UserCard 
                    className="center" 
                    onClick={ () => setUserOpen(!isUserOpen) }
                    onClickRegisterUser={ () => setUserOpen(!isUserOpen) }
                />
            }    
            {
                isClientOpen && 
                <ClientCard 
                    className="center" 
                    onClick={ () => setClientOpen(!isClientOpen) }
                    onClickRegisterClient={ () => setClientOpen(!isClientOpen) }
                />
            }   
            
    
            
    
        </div>
    );
}