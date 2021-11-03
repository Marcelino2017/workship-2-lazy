/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
/* 
<div class="p-4 ">
    <img class="mx-auto" width="320" src="https://randomfox.ca/images/9.jpg" alt="">
</div> */
//crear 1  imagen

import { registraImagen } from "./lazy.js";

const minumum = 1;
const maximum = 122;
const random = () =>  Math.floor(Math.random() * (maximum - minumum)) + minumum;

const createImagenNode = () => {
    const container = document.createElement('div');
    container.className = "p-4";


    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    
    return container;

}

const nuevaImagen = createImagenNode();

const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');

const addImagen = () => {
    const newImagen = createImagenNode();
    mountNode.appendChild(newImagen);
    registraImagen(newImagen);
};

addButton.addEventListener('click', addImagen);




