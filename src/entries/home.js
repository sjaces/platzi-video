import React from 'react';
import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
// import Media from './src/playlist/components/media';
// import Playlist from '../playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json';




const homeContainer = document.getElementById('home-container');
const holamundo = <h1>Hola mundo!</h1>;

// ReactDOM.render(lo que quiero renderizar, dónde lo quiero renderizar);

// ReactDOM.render(holamundo, app);
render(<Home data={data} />, homeContainer);