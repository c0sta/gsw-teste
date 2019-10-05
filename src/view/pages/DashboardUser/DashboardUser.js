import React, {useState} from 'react';

//COMPONENTS
import HeaderUser from '../../components/HeaderUser/HeaderUser';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserCard from '../../components/UserCard/UserCard';
import HoursCard from '../../components/HoursCard/Hours';
import ProjectList from '../../components/ProjectListUser/ProjectListUser';
import SideBar from '../../components/SideBarUser/SideBarUser';
//ASSETS
import ApontamentoHoras from '../../components/ApontamentoHoras/ApontamentoHoras';
import DatePicker from 'react-datepicker';
import './DashboardUser.css';

export default function Dashboard(){

    const [isProjectOpen, setProjectOpen] =  useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const [isHoursOpen, setHoursOpen] = useState(false);
   
   
    return(
        <div className="dashboard-box">
            <HeaderUser/>
                
            <div className="dashboard-body">


               <div className="menu-container">
                    <SideBar />
               </div>


               <div className="dash-container">
                   
                    <header className="dash-header-container">
                        <text className="home-text">Home / Dashboard</text>
                        <div className="welcome-user">
                            <text className="welcome-text">Olá Einstein da Silva, bem vindo!</text>
                            <text className="welcome-subtext">Veja o andamento dos projetos</text>
                        </div>
                        
                    </header>
                    
                    <body className="dash-body-container">
                        <ProjectList />
                        <ApontamentoHoras />
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
                isHoursOpen && 
                <HoursCard 
                    className='center' 
                    onClick={() => setHoursOpen(!isHoursOpen)} 
                />
            }
            
            
    
        </div>
    );
}