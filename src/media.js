// import React from 'react';
import React, {Component} from 'react';
import './media.css';
import './estilos.css';

// class Media extends React.Component {
class Media extends Component {
    render() {

        
        return (
            <div className="Media">
                <div className="Media-cover">
                <img
                    src="./images/covers/bitcoin.jpg"
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                    />
                <h3 className="Media-title">¿Por qué aprender React? Porque ahí está la pasta</h3>
                <p className="Media-author">Haz interfaces molonas y ya verás.</p>
                <p>¡Testing some things!</p>
                    </div>
            </div>
        )
    }
}

export default Media;