import React, {useState, useEffect} from 'react';
import './ProjectList.css';
import Item from '../ItemList/ItemList.js';
import api from '../../../services/api.js';

import filter from '../../assets/dashboard/filter.png';
import arrowDown from '../../assets/dashboard/arrow-down-light.png';

export default function ProjectList(){

    const [data, setData] = useState([]);
    const [isOpen, setOpen] = useState(false);

    useEffect( () => {

        async function loadData(){
            const res = await api.get('/projetos')
            setData(res.data);
        }
        loadData();

    }, []);

    return(
        <div className="list-box">
            
            <h1 className="list-title">Resultado do filtro</h1>

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
                        
                            <Item key={projeto.id} onClick={ () => setOpen(!isOpen)} criadoPor={projeto.criadoPor} projeto={projeto.projeto} entrega={projeto.entrega} horas_dedicadas={projeto.horas_dedicadas} horas_faltantes={projeto.horas_faltantes}/>
                        
                            {isOpen? (
                                <div className="list-colapsible">
                                {projeto.observacoes.map(
                                        comment => (
                                            <div className="item-obs">
                                                <header className="item-obs-header">
                                                    <text>Observações</text>
                                                    <text>Data</text>
                                                    <text>Horas trabalhadas</text>
                                                </header>
                                                <div className="item-obs-body">
                                                    <text>Observações</text>
                                                    <text>Data</text>
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
                        Acabaram os projetos :'( <br/> Time to chill <span role="img">☕</span>
                    </div>
                ) }
            </div>
             
        </div>
    );
}