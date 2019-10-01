import React, {useState} from 'react';

import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import UserCard from '../../components/UserCard/UserCard';
import Alert from '../../components/AlertCard/Alert';
import Hours from '../../components/HoursCard/Hours';

import './Dashboard.css';

export default function Dashboard(){

    const [isProjectCardOpen, setProjectOpen] =  useState(false);
    const [isUserCardOpen, setUserOpen] = useState(false);

    return(
        <div>
            <Header handleProject={ ()=> setProjectOpen(!isProjectCardOpen) } handleUser={ () => setUserOpen(!isUserCardOpen)}/>
            <Hours className='center' />
            
            {isProjectCardOpen && <ProjectCard className="center" />}
            {isUserCardOpen && <UserCard className="center" />}    
        
    
        </div>
    );
}