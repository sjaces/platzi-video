import React from 'react';
import './modal.css';

function Modal(props) {
    return (
        <div className="Modal">      
        Esto es un modal
            {props.children}
        <button className="Modal-close" onClick={props.handleClick} > </button>
        </div>
    )
}
export default Modal