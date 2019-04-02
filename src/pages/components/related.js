import React from 'react';
import './related.css';
import logo from '../../../images/logo.png'

function Related(props) {
    return (
        <div className="Related" >
            <img src= {logo} width={250}/>
            {props.children}
        </div>
    )
}

export default Related