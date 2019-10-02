import React from 'react';
import MetisMenu from 'react-metismenu';
 



export default function Menu(props){

    const content=[
        {
            icon: 'icon-class-name',
            label: 'Label of Item',
            to: '#a-link',
        },
        {
            icon: 'icon-class-name',
            label: 'Second Item',
            content: [
                {
                    icon: 'icon-class-name',
                    label: 'Sub Menu of Second Item',
                    to: '#another-link',
                },
            ],
        },
    ];
     
    

    return (
        <MetisMenu content={content}  />
    )
}
