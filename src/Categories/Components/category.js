import React from 'react';
import Playlist from '../../playlist/components/playlist';

import './category.css';

function Category (props) {

    // console.log('lo que pillo en categoria');
    // console.log(props);
    return (
        <div className="Category">
            <p className="Category-description  "> {props.description} </p>
            <h2 className="Category-title"> {props.title} </h2>

        <div>
            {
                <Playlist playlist={props.playlist} handleClick={props.handleClick}
                setRef = {props.miMediaId} 
                />
            }
            {/* <Playlist {props.playlist} /> */}
        </div>
       
        
        </div>
    )
}

export default Category