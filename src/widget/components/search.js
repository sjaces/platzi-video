import React from 'react';
import './search.css';
function Search(props) {
    return (
        <form className="Search" onSubmit={props.handleSubmit}>
            <input className="Search-input" type="text" placeholder="Busca un vídeo"
            ref={props.setRef}
            />
        </form>
    )
}
export default Search