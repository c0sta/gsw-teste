import React, {useState} from 'react';

//COMPONENTS
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserCard from '../../components/UserCard/UserCard';
import HoursCard from '../../components/HoursCard/Hours';
import ProjectList from '../../components/ProjectList/ProjectList';
import SideBar from '../../components/SideBar/SideBar';
//ASSETS
import './Dashboard.css';

export default function Dashboard(){

    const [isProjectOpen, setProjectOpen] =  useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const [isHoursOpen, setHoursOpen] = useState(false);
   
   
    return(
        <div className="dashboard-box">
            <Header 
                  
                   handleProject={ ()=> setProjectOpen(!isProjectOpen) } 
                   handleUser={ () => setUserOpen(!isUserOpen)}
                   handleClient={ () => setHoursOpen(!isHoursOpen) }
            />
                
            <div className="dashboard-body">


               <div className="menu-container">
                    <SideBar />
               </div>


               <div className="dash-container">
                   
                    <header className="dash-header-container">
                        <text>Home / Dashboard</text>
                        <h1>Olá Gabriel, bem vindo! </h1>
                        <h3>Veja o andamento de seus projetos</h3>
                    </header>
                    
                    <body className="dash-body-container">
                        <ProjectList />
                    
                    </body>

                    <footer className="footer">
                         <h1>Desenvolvido com muito café e maconha</h1>
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