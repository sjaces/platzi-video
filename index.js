import React from 'react';
import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
import Media from './src/media';



//console.log("Hola mundo!");

const app = document.getElementById('app');
const holamundo = <h1>Hola mundo!</h1>;

// ReactDOM.render(lo que quiero renderizar, dónde lo quiero renderizar);

// ReactDOM.render(holamundo, app);

render(<Media/>, app);