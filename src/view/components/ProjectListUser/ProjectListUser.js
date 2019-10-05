import React, {useState, useEffect} from 'react';
import './ProjectListUser.css';
import Item from '../ItemListUser/ItemListUser.js';
import api from '../../../services/api.js';
import HoursCard from '../HoursCard/Hours';
import filter from '../../assets/dashboard/filter.png';
import arrowDown from '../../assets/dashboard/arrow-down-light.png';

export default function ProjectList(){

    const [data, setData] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [isHoursOpen, setHoursOpen] = useState(false);

    useEffect( () => {

        async function loadData(){
            const res = await api.get('/projetos')
            setData(res.data);
        }
        loadData();

    }, []);

    return(
        <div className="list-box">
            
            <h1 className="list-title">Meus projetos</h1>

            <header className="list-header">

                <div className="list-filter">
                    <img src={filter} alt="icon filter"/>
                    <input type="search" placeholder="Projetos"/>
                    <img src={arrowDown} alt="icon arrown down"/>
                </div>
                <div className="list-horas">
                    <text>Horas lançadas</text>
                    <text>Horas faltantes</text>
                </div> 
            </header>
            <div className="list">
            { data.length > 0 ? (

                <ul >    
                    { data.map( projeto => (
                        <div className="list-item">
                        
                            <Item 
                                key={projeto.id} 
                                descricao={projeto.descricao} 
                                hours_add={ () => setHoursOpen(!isHoursOpen)} 
                                onClick={ () => setOpen(!isOpen)} 
                                criadoPor={projeto.criadoPor} 
                                projeto={projeto.projeto} 
                                entrega={projeto.entrega} 
                                horas_dedicadas={projeto.horas_dedicadas} 
                                horas_faltantes={projeto.horas_faltantes}
                            />

                            {isOpen? (
                                <div className="list-colapsible">
                                <header className="item-obs-header">

                                    <div className="item-obs-left">
                                        <text>Observações</text>
                                    </div>

                                    <div className="item-obs-right">
                                        <text>Data</text>
                                        <text>Horas trabalhadas</text>
                                    </div>

                                </header>   
                                {projeto.observacoes.map(
                                        comment => (
                                            
                                                <div className="item-obs-body">
                                                    <div className="item-body-right">
                                                        <text>{comment.msg}</text>
                                                    </div>

                                                    <div className="item-body-left">
                                                        <text>{comment.data}</text>
                                                        <text>{comment.horas_dedicadas} h</text>
                                                    </div>
                                                    
                                                </div>
                        
                                        )
                                    )}        
                                </div>
                            ): null}
                        
                        </div>
                        
                ))}
                </ul>  
                ) : (
                    <div className="empty">
                        Acabaram os projetos :'( Time to chill <span role="img">☕</span>
                    </div>
                ) }
            </div>
             {
                 isHoursOpen? <HoursCard />: null
             }
        </div>
    );
}