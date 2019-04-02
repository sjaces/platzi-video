import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

// class Playlist extends Component {
//     render(){
        // const miPlaylist = this.props.data.categories[0];
        // console.log(miPlaylist);
        // console.log(miPlaylist.playlist)
function Playlist(props){ 
    
    return (
        
        <div className="Playlist">
                    
                    {

                        props.playlist.map((item) => {
                            
                            return <Media {...item} key={item.id}
                            handleClick={props.handleClick}
                            />;
                        })
                    }
                    
                </div>
            )
    }


export default Playlist; 