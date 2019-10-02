import React, {useState} from 'react';

import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserCard from '../../components/UserCard/UserCard';
import Alert from '../../components/AlertCard/Alert';
import HoursCard from '../../components/HoursCard/Hours';

import './Dashboard.css';

export default function Dashboard(){

    const [isProjectOpen, setProjectOpen] =  useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const [isHoursOpen, setHoursOpen] = useState(false);
    return(
        <div>
            <Header 
                handleProject={ ()=> setProjectOpen(!isProjectOpen) } 
                handleUser={ () => setUserOpen(!isUserOpen)}
                handleClient={ () => setHoursOpen(!isHoursOpen) }
            />
            
            {isProjectOpen && <ProjectCard className="center" onClick={ () => setProjectOpen(!isProjectOpen) }/>}
            {isUserOpen && <UserCard className="center" onClick={ () => setUserOpen(!isUserOpen) }/>}    
            {isHoursOpen && <HoursCard className='center' onClick={() => setHoursOpen(!isHoursOpen)} />}
    
        </div>
    );
}