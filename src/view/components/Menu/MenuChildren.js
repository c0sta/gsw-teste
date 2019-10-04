import React, {useState} from 'react';

import './MenuChildren.css';

const MenuChildren = (props) => (
    <div className="menu-children" children={props.children} >
        {
            props.children.map(
                item => <button className="menu-box-children-button">{item.name}</button>
                
            )
        }
    </div>
);

export default MenuChildren;
