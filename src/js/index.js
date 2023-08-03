import Note from './note.js';

import '../css/stile.css';

// const nota1 = new Note();
const container = document.querySelector(".container");
/////inserita prima immagine
import imagineFn from '../asset/img/img.js';

container.appendChild(imagineFn());



/////inserita seconda immagine 
const img = document.querySelector(".img");

import imagineCity from '../asset/img/img2.js';
img.appendChild(imagineCity());

